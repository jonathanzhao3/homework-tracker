# Homework Tracker

A single-page study hub that runs entirely in the browser. No build step, no server — open `index.html` and it works.

## Features

- **Tasks** — add homework with a subject and priority, check items off, filter and sort.
- **Timetable** — import your school timetable from an `.ics` file or add classes manually. A "Now / Up Next" bar shows your current and upcoming class.
- **Subject sync** — the task subject picker automatically follows whatever class is on right now, based on your timetable.
- **Timer** — a Pomodoro-style focus timer with a circular progress ring.
- **Resources** — save links and notes per subject.
- **Files** — upload and keep study files.
- **LaTeX editor** — write and compile LaTeX to PDF in the browser via a bundled WebAssembly TeX engine.
- **Settings** — dark mode, accent color, and custom subjects.

Everything is saved to your browser's `localStorage`, so your data stays on your device.

## Running locally

Just open `index.html` in a browser. For the LaTeX compiler to load its WebAssembly engine, serve the folder over HTTP rather than opening the file directly:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository (see commands below).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick the `main` branch and the `/ (root)` folder, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Project structure

```
index.html                 App UI, styles, and logic (everything)
PdfTeXEngine.js            WebAssembly LaTeX engine loader
swiftlatexpdftex.{js,wasm,fmt}   TeX engine + preloaded format
article.cls, *.sty, *.clo, *.def  Bundled TeX packages
swiftlatex-assets/         TeX fonts and mapping
tex/                       Additional TeX package tree
latex-guide.tex            Sample LaTeX document
```

## Notes

- The LaTeX feature falls back to fetching packages and fonts from public CDNs / TeXLive mirrors for anything not bundled locally. These load fine on GitHub Pages.
- If the app was set up with a Supabase backend for cross-device sync, that requires valid credentials in the code to work.

---
*Drafted with Dia*
