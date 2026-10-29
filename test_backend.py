import io
import sqlite3
import tempfile
import unittest
from pathlib import Path

import app as library_app
from app import app, initialize_database


class LibraryBackendTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        root = Path(self.temporary_directory.name)
        app.config.update(
            TESTING=True,
            SECRET_KEY="test-secret",
            DATABASE=str(root / "test.sqlite3"),
            UPLOAD_FOLDER=str(root / "uploads"),
        )
        Path(app.config["UPLOAD_FOLDER"]).mkdir()
        initialize_database()
        self.client = app.test_client()

    def tearDown(self):
        self.temporary_directory.cleanup()

    def signup(self, client=None, email="reader@example.com"):
        client = client or self.client
        response = client.post("/api/signup", json={
            "name": "Reader",
            "email": email,
            "password": "secure-password",
        })
        self.assertEqual(response.status_code, 201)
        return response

    def test_password_authentication_and_watchlist_are_account_scoped(self):
        self.signup()
        self.assertEqual(self.client.put("/api/watchlist", json={"ids": ["classic-1"]}).status_code, 200)

        other_client = app.test_client()
        self.signup(other_client, "another@example.com")
        self.assertEqual(other_client.get("/api/watchlist").json["ids"], [])

        self.client.post("/api/logout")
        response = self.client.post("/api/login", json={
            "email": "reader@example.com",
            "password": "wrong-password",
        })
        self.assertEqual(response.status_code, 401)
        self.assertEqual(self.client.post("/api/login", json={
            "email": "reader@example.com",
            "password": "secure-password",
        }).status_code, 200)

    def test_uploads_are_private_and_can_be_removed(self):
        self.signup()
        response = self.client.post("/api/uploads", data={
            "title": "Private book",
            "author": "Reader",
            "category": "Fiction",
            "cover": (io.BytesIO(b"\x89PNG\r\n\x1a\nvalid-image"), "cover.png"),
            "pdf": (io.BytesIO(b"%PDF-1.4\nprivate-book"), "book.pdf"),
        }, content_type="multipart/form-data")
        self.assertEqual(response.status_code, 201)
        book = response.json["book"]
        self.assertEqual(len(self.client.get("/api/uploads").json["books"]), 1)

        other_client = app.test_client()
        self.signup(other_client, "another@example.com")
        self.assertEqual(other_client.get(book["pdfUrl"]).status_code, 404)

        private_file = self.client.get(book["pdfUrl"])
        self.assertEqual(private_file.status_code, 200)
        private_file.close()
        self.assertEqual(self.client.delete(f"/api/uploads/{book['id']}").status_code, 200)
        self.assertEqual(self.client.get("/api/uploads").json["books"], [])

    def test_upload_rejects_non_pdf_and_public_reviews_are_saved(self):
        self.signup()
        invalid_upload = self.client.post("/api/uploads", data={
            "title": "Not a PDF",
            "author": "Reader",
            "category": "Fiction",
            "cover": (io.BytesIO(b"\x89PNG\r\n\x1a\nimage"), "cover.png"),
            "pdf": (io.BytesIO(b"not a pdf"), "book.pdf"),
        }, content_type="multipart/form-data")
        self.assertEqual(invalid_upload.status_code, 400)

        posted = self.client.post("/api/reviews", json={
            "name": "Reader",
            "rating": 5,
            "message": "A lovely library.",
        })
        self.assertEqual(posted.status_code, 201)
        self.assertEqual(self.client.get("/api/reviews").json["reviews"][0]["message"], "A lovely library.")

    def test_private_routes_require_login(self):
        profile_page = self.client.get("/profile.html")
        self.assertEqual(profile_page.status_code, 200)
        profile_page.close()
        profile_script = self.client.get("/profile.js")
        self.assertEqual(profile_script.status_code, 200)
        profile_script.close()
        self.assertEqual(self.client.get("/api/uploads").status_code, 401)
        self.assertEqual(self.client.put("/api/watchlist", json={"ids": []}).status_code, 401)

    def test_legacy_sqlite_database_is_copied_to_library_db(self):
        root = Path(self.temporary_directory.name)
        legacy_path = root / "library.sqlite3"
        new_path = root / "library.db"
        original_database = app.config["DATABASE"]
        original_legacy_path = library_app.LEGACY_DATABASE
        try:
            app.config["DATABASE"] = str(legacy_path)
            library_app.LEGACY_DATABASE = legacy_path
            initialize_database()
            database = sqlite3.connect(legacy_path)
            try:
                database.execute(
                    "INSERT INTO users (name, email, password_hash, created_at) VALUES (?, ?, ?, ?)",
                    ("Existing Reader", "existing@example.com", "hashed-password", "2026-01-01"),
                )
                database.commit()
            finally:
                database.close()

            app.config["DATABASE"] = str(new_path)
            initialize_database()
            database = sqlite3.connect(new_path)
            try:
                user = database.execute("SELECT email FROM users").fetchone()
            finally:
                database.close()
            self.assertEqual(user[0], "existing@example.com")
            self.assertTrue(legacy_path.exists())
        finally:
            app.config["DATABASE"] = original_database
            library_app.LEGACY_DATABASE = original_legacy_path


if __name__ == "__main__":
    unittest.main()
