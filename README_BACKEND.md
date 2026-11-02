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

## Deploy online with Render

The repository includes `render.yaml` for a Flask web service with Gunicorn, HTTPS, a generated session secret, and a persistent 1 GB disk for `library.db` and private uploads. Render requires a paid web-service plan to attach persistent disks; approve the cost in your Render account before creating the service.

1. Sign in to Render and choose **New → Blueprint**.
2. Connect `Love88-hue/online-book-library` and select the `main` branch.
3. Review the `online-book-library` web service and its persistent disk in `render.yaml`, then approve creation.
4. Wait for the deploy and health check to succeed. Render provides an HTTPS `onrender.com` URL.
5. Use that Render URL for signup, login, profiles, uploads, and reviews. The Flask app serves the frontend on the same origin so secure login cookies work.

GitHub Pages remains a separate static frontend; it cannot run Flask or access the Render login session. The Render service uses its own database and uploaded files, separate from this computer's local `instance` folder. Do not expose the Flask development server directly to the internet.
