import os
import secrets
import shutil
import sqlite3
import uuid
from datetime import datetime, timezone
from functools import wraps
from pathlib import Path

from flask import Flask, g, jsonify, request, send_from_directory, session, url_for
from werkzeug.security import check_password_hash, generate_password_hash


ROOT = Path(__file__).resolve().parent
INSTANCE = ROOT / "instance"
INSTANCE.mkdir(exist_ok=True)
LEGACY_DATABASE = INSTANCE / "library.sqlite3"


def load_secret_key():
    configured = os.environ.get("FLASK_SECRET_KEY")
    if configured:
        return configured
    secret_path = INSTANCE / "secret_key"
    if not secret_path.exists():
        secret_path.write_text(secrets.token_hex(32), encoding="ascii")
    return secret_path.read_text(encoding="ascii").strip()


app = Flask(__name__)
app.config.update(
    SECRET_KEY=load_secret_key(),
    DATABASE=str(INSTANCE / "library.db"),
    UPLOAD_FOLDER=str(INSTANCE / "uploads"),
    MAX_CONTENT_LENGTH=36 * 1024 * 1024,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=os.environ.get("FLASK_COOKIE_SECURE") == "1",
)
Path(app.config["UPLOAD_FOLDER"]).mkdir(parents=True, exist_ok=True)

SITE_FILES = {
    "index.html", "about.html", "reviews.html", "profile.html",
    "styles.css", "app.js", "reviews.js", "profile.js",
}
ALLOWED_CATEGORIES = {
    "Fiction", "Fantasy", "Classics", "Poetry", "Mystery", "Adventure",
    "Romance", "Non-fiction", "Children", "Other",
}
SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS uploads (
    id TEXT PRIMARY KEY,
    owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    cover_filename TEXT NOT NULL,
    pdf_filename TEXT NOT NULL,
    created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS watchlist (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    book_id TEXT NOT NULL,
    PRIMARY KEY (user_id, book_id)
);
CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
);
"""


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(app.config["DATABASE"], timeout=10)
        g.db.row_factory = sqlite3.Row
        g.db.execute("PRAGMA foreign_keys = ON")
    return g.db


@app.teardown_appcontext
def close_db(_error=None):
    database = g.pop("db", None)
    if database is not None:
        database.close()


def initialize_database():
    database_path = Path(app.config["DATABASE"])
    database_path.parent.mkdir(parents=True, exist_ok=True)
    if database_path != LEGACY_DATABASE and not database_path.exists() and LEGACY_DATABASE.exists():
        shutil.copy2(LEGACY_DATABASE, database_path)
    database = sqlite3.connect(database_path)
    try:
        database.execute("PRAGMA foreign_keys = ON")
        database.executescript(SCHEMA)
    finally:
        database.close()


def api_error(message, status):
    return jsonify(error=message), status


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        user_id = session.get("user_id")
        if not user_id:
            return api_error("Please log in to continue.", 401)
        user = get_db().execute(
            "SELECT id, name, email FROM users WHERE id = ?", (user_id,)
        ).fetchone()
        if user is None:
            session.clear()
            return api_error("Please log in to continue.", 401)
        g.user = user
        return view(*args, **kwargs)

    return wrapped


def user_json(user):
    return {"id": user["id"], "name": user["name"], "email": user["email"]}


def upload_json(row):
    return {
        "id": row["id"],
        "title": row["title"],
        "author": row["author"],
        "category": row["category"],
        "year": "",
        "uploaded": True,
        "createdAt": row["created_at"],
        "coverUrl": url_for("uploaded_file", book_id=row["id"], kind="cover"),
        "pdfUrl": url_for("uploaded_file", book_id=row["id"], kind="pdf"),
    }


def now_iso():
    return datetime.now(timezone.utc).isoformat()


@app.get("/")
def home():
    return send_from_directory(ROOT, "index.html")


@app.get("/<path:filename>")
def site_file(filename):
    if filename not in SITE_FILES:
        return api_error("Not found.", 404)
    return send_from_directory(ROOT, filename)


@app.get("/api/me")
def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify(user=None)
    user = get_db().execute(
        "SELECT id, name, email FROM users WHERE id = ?", (user_id,)
    ).fetchone()
    if user is None:
        session.clear()
        return jsonify(user=None)
    return jsonify(user=user_json(user))


@app.post("/api/signup")
def signup():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))
    if not 1 <= len(name) <= 60:
        return api_error("Enter a name between 1 and 60 characters.", 400)
    if not 3 <= len(email) <= 254 or "@" not in email:
        return api_error("Enter a valid email address.", 400)
    if len(password) < 8 or len(password) > 1024:
        return api_error("Password must be at least 8 characters.", 400)
    try:
        database = get_db()
        cursor = database.execute(
            "INSERT INTO users (name, email, password_hash, created_at) VALUES (?, ?, ?, ?)",
            (name, email, generate_password_hash(password), now_iso()),
        )
        database.commit()
    except sqlite3.IntegrityError:
        return api_error("An account already exists for that email.", 409)
    session.clear()
    session["user_id"] = cursor.lastrowid
    return jsonify(user={"id": cursor.lastrowid, "name": name, "email": email}), 201


@app.post("/api/login")
def login():
    data = request.get_json(silent=True) or {}
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))
    user = get_db().execute(
        "SELECT id, name, email, password_hash FROM users WHERE email = ?", (email,)
    ).fetchone()
    if user is None or not check_password_hash(user["password_hash"], password):
        return api_error("Email or password is incorrect.", 401)
    session.clear()
    session["user_id"] = user["id"]
    return jsonify(user=user_json(user))


@app.post("/api/logout")
def logout():
    session.clear()
    return jsonify(ok=True)


@app.route("/api/watchlist", methods=["GET", "PUT"])
@login_required
def watchlist():
    database = get_db()
    if request.method == "GET":
        rows = database.execute(
            "SELECT book_id FROM watchlist WHERE user_id = ? ORDER BY rowid",
            (g.user["id"],),
        ).fetchall()
        return jsonify(ids=[row["book_id"] for row in rows])
    data = request.get_json(silent=True) or {}
    ids = data.get("ids")
    if not isinstance(ids, list) or len(ids) > 500 or any(
        not isinstance(book_id, str) or not 1 <= len(book_id) <= 100 for book_id in ids
    ):
        return api_error("The watchlist is invalid.", 400)
    database.execute("DELETE FROM watchlist WHERE user_id = ?", (g.user["id"],))
    database.executemany(
        "INSERT INTO watchlist (user_id, book_id) VALUES (?, ?)",
        [(g.user["id"], book_id) for book_id in dict.fromkeys(ids)],
    )
    database.commit()
    return jsonify(ids=list(dict.fromkeys(ids)))


@app.route("/api/uploads", methods=["GET", "POST"])
@login_required
def uploads():
    database = get_db()
    if request.method == "GET":
        rows = database.execute(
            "SELECT * FROM uploads WHERE owner_id = ? ORDER BY created_at DESC",
            (g.user["id"],),
        ).fetchall()
        return jsonify(books=[upload_json(row) for row in rows])

    title = request.form.get("title", "").strip()
    author = request.form.get("author", "").strip()
    category = request.form.get("category", "").strip()
    cover = request.files.get("cover")
    pdf = request.files.get("pdf")
    if not 1 <= len(title) <= 100 or not 1 <= len(author) <= 80:
        return api_error("Enter a title and author within the allowed lengths.", 400)
    if category not in ALLOWED_CATEGORIES:
        return api_error("Choose a valid book category.", 400)
    if cover is None or pdf is None:
        return api_error("Choose both a cover image and a PDF.", 400)
    cover_bytes = cover.stream.read(5 * 1024 * 1024 + 1)
    pdf_bytes = pdf.stream.read(30 * 1024 * 1024 + 1)
    if not cover_bytes or len(cover_bytes) > 5 * 1024 * 1024:
        return api_error("Cover images must be no larger than 5 MB.", 400)
    if not pdf_bytes or len(pdf_bytes) > 30 * 1024 * 1024:
        return api_error("PDF files must be no larger than 30 MB.", 400)

    if cover_bytes.startswith(b"\x89PNG\r\n\x1a\n"):
        cover_extension, cover_mime = ".png", "image/png"
    elif cover_bytes.startswith(b"\xff\xd8\xff"):
        cover_extension, cover_mime = ".jpg", "image/jpeg"
    elif cover_bytes[:4] == b"RIFF" and cover_bytes[8:12] == b"WEBP":
        cover_extension, cover_mime = ".webp", "image/webp"
    else:
        return api_error("Cover must be a valid JPG, PNG, or WEBP image.", 400)
    if not pdf_bytes.startswith(b"%PDF-"):
        return api_error("The selected book file is not a valid PDF.", 400)

    book_id = str(uuid.uuid4())
    cover_filename = f"{book_id}{cover_extension}"
    pdf_filename = f"{book_id}.pdf"
    owner_folder = Path(app.config["UPLOAD_FOLDER"]) / str(g.user["id"])
    owner_folder.mkdir(parents=True, exist_ok=True)
    cover_path = owner_folder / cover_filename
    pdf_path = owner_folder / pdf_filename
    try:
        cover_path.write_bytes(cover_bytes)
        pdf_path.write_bytes(pdf_bytes)
        database.execute(
            """INSERT INTO uploads
               (id, owner_id, title, author, category, cover_filename, pdf_filename, created_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
            (book_id, g.user["id"], title, author, category, cover_filename, pdf_filename, now_iso()),
        )
        database.commit()
    except Exception:
        cover_path.unlink(missing_ok=True)
        pdf_path.unlink(missing_ok=True)
        raise
    row = database.execute("SELECT * FROM uploads WHERE id = ?", (book_id,)).fetchone()
    return jsonify(book=upload_json(row)), 201


@app.route("/api/uploads/<book_id>", methods=["GET", "DELETE"])
@login_required
def upload_detail(book_id):
    database = get_db()
    row = database.execute(
        "SELECT * FROM uploads WHERE id = ? AND owner_id = ?", (book_id, g.user["id"])
    ).fetchone()
    if row is None:
        return api_error("Book not found.", 404)
    if request.method == "GET":
        return jsonify(book=upload_json(row))
    owner_folder = Path(app.config["UPLOAD_FOLDER"]) / str(g.user["id"])
    (owner_folder / row["cover_filename"]).unlink(missing_ok=True)
    (owner_folder / row["pdf_filename"]).unlink(missing_ok=True)
    database.execute("DELETE FROM uploads WHERE id = ? AND owner_id = ?", (book_id, g.user["id"]))
    database.execute(
        "DELETE FROM watchlist WHERE user_id = ? AND book_id = ?", (g.user["id"], book_id)
    )
    database.commit()
    return jsonify(ok=True)


@app.get("/api/uploads/<book_id>/<kind>")
@login_required
def uploaded_file(book_id, kind):
    if kind not in {"cover", "pdf"}:
        return api_error("Not found.", 404)
    row = get_db().execute(
        "SELECT * FROM uploads WHERE id = ? AND owner_id = ?", (book_id, g.user["id"])
    ).fetchone()
    if row is None:
        return api_error("Book not found.", 404)
    filename = row["cover_filename"] if kind == "cover" else row["pdf_filename"]
    mimetype = (
        "image/png" if filename.endswith(".png")
        else "image/jpeg" if filename.endswith(".jpg")
        else "image/webp" if filename.endswith(".webp")
        else "application/pdf"
    )
    response = send_from_directory(
        Path(app.config["UPLOAD_FOLDER"]) / str(g.user["id"]),
        filename,
        mimetype=mimetype,
        as_attachment=False,
    )
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["Cache-Control"] = "private, no-store"
    return response


@app.route("/api/reviews", methods=["GET", "POST"])
def reviews():
    database = get_db()
    if request.method == "GET":
        rows = database.execute(
            "SELECT name, rating, message, created_at FROM reviews ORDER BY id DESC LIMIT 100"
        ).fetchall()
        return jsonify(reviews=[
            {
                "name": row["name"],
                "rating": row["rating"],
                "message": row["message"],
                "createdAt": row["created_at"],
            }
            for row in rows
        ])
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    message = str(data.get("message", "")).strip()
    rating = data.get("rating")
    if not 1 <= len(name) <= 50 or not 1 <= len(message) <= 500:
        return api_error("Enter a name and review within the allowed lengths.", 400)
    if not isinstance(rating, int) or isinstance(rating, bool) or not 1 <= rating <= 5:
        return api_error("Choose a rating from 1 to 5.", 400)
    created_at = now_iso()
    database.execute(
        "INSERT INTO reviews (name, rating, message, created_at) VALUES (?, ?, ?, ?)",
        (name, rating, message, created_at),
    )
    database.commit()
    return jsonify(review={
        "name": name, "rating": rating, "message": message, "createdAt": created_at
    }), 201


@app.errorhandler(413)
def request_too_large(_error):
    return api_error("Upload request exceeds the 36 MB limit.", 413)


initialize_database()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
