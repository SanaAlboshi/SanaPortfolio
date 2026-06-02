# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sana Alboshi — a static single-page application built with vanilla HTML, CSS, and JavaScript (no framework, no build tools, no package manager).

GitHub remote: `https://github.com/SanaAlboshi/MyProfile.git`

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```
python -m http.server 8000
# or
npx serve .
```

## Architecture

Three files do all the work:

- **[index.html](index.html)** — Full page structure. All sections (About, Education, Experience, Skills, Projects, Courses, Contact) live here as semantic HTML. Includes a `#project-overlay` modal used by all project cards.
- **[style.css](style.css)** — All styling. Uses CSS custom properties (`--bg`, `--gold`, `--gold-dim`, `--text-dim`, `--cream`, `--surface`) for theming. Light/dark mode is toggled by swapping a `light-mode` class on `<body>`.
- **[script.js](script.js)** — All interactivity. Key pieces:
  - `projects` object — source of truth for all project data (title, HTML description, tech stack, images)
  - `openProject(id)` / `closeProject()` — modal overlay system
  - `toggleTheme()` — dark/light mode, persisted in `localStorage`
  - `toggleMenu()` — mobile hamburger menu
  - `IntersectionObserver` — scroll-reveal animations
  - Custom animated cursor tracking

Static assets (project preview images) live in [static/](static/).

## Adding a New Project

1. Add an entry to the `projects` object in [script.js](script.js) with keys: `title`, `description` (HTML string), `tech` (array), `images` (array of paths).
2. Add a project card `<div>` in the `#projects` section of [index.html](index.html) with `onclick="openProject('your-id')"`.
3. Place preview images in [static/](static/).

## Theming

CSS variables are defined on `:root` for dark mode (default) and overridden under `body.light-mode` for light mode. Add new color tokens in both blocks to keep themes consistent.
