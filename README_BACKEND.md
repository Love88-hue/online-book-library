# Run the Online Book Library locally

The Flask backend adds real, server-side accounts, a profile dashboard, private book uploads, account-specific watchlists, and shared reviews. It uses SQLite and stores uploaded files on this computer.

## Windows setup

Open PowerShell in this project folder and run:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r requirements.txt
py app.py
```

Open <http://127.0.0.1:5000>. Keep the terminal open while using the site. Stop the server with Ctrl+C.

The first run creates `instance\library.db`, a private session-signing key, and `instance\uploads`. These are local data and should not be published. Users can access only their own uploaded PDFs and covers. Reviews are shared with other users of this local server. If an earlier `instance\library.sqlite3` exists, it is copied to `instance\library.db` so existing accounts and data are preserved; the original file is left untouched as a backup.

The existing GitHub Pages website remains static and does not connect to this local server. To make accounts and uploads available to people online, deploy the Flask app to an internet host with persistent private storage and HTTPS; do not expose this development server to the internet.
