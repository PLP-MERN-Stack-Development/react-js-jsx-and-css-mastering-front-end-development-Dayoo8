# React.js JSX & CSS Assignment — Mastering Front-End Development

This repository contains the Week 3 assignment code. The interactive React app is in the `assignment-dashboard/` folder and is a Vite-powered React project demonstrating components, hooks, context, localStorage persistence, and simple API usage.

Quick start

1. cd assignment-dashboard
2. npm install
3. npm run dev

Open http://localhost:5173 in your browser to view the app.

See `assignment-dashboard/README.md` for more detailed instructions, scripts, and component notes.

Project structure (top-level)

- `Week3-Assignment.md` — assignment instructions
- `assignment-dashboard/` — main React app (run and build here)
- `README.md` — this file

If you want, I can expand this root README with badges, screenshots, or deployment instructions.
# React.js JSX & CSS Assignment — Mastering Front-End Development

This repository contains the starter and completed code for the Week 3 assignment "React.js, JSX and CSS". The main interactive project lives in the `assignment-dashboard/` folder — a small React + Vite application showcasing component architecture, hooks, context, localStorage persistence, and API integration.

## Table of contents
- Project overview
- Quick start (development)
- Build & preview
- Project structure
- Important files & components
- Development notes & tips
- Troubleshooting
- Contributing

## Project overview

- Framework: React (React 19) with Vite
- Purpose: Demonstrate reusable components, state management with hooks, a Theme context, localStorage persistence, and simple API usage.
- Main app: `assignment-dashboard/` (development server served with Vite)

## Quick start (development)

Prerequisites
- Node.js (recommend v18+). Verify with `node -v`.
- npm (bundled with Node) or yarn.

Install and run the dashboard app (works on Windows PowerShell):

1. Open a terminal and change to the project folder:

   cd assignment-dashboard

2. Install dependencies:

   npm install

3. Start the dev server:

   npm run dev

4. Open the app in your browser (Vite default):

   http://localhost:5173

Notes
- The root `package.json` in this repo only contains shared dependency entries; the actual runnable app and scripts live in `assignment-dashboard/package.json`.

## Build & preview

To create an optimized production build and preview it locally:

1. From `assignment-dashboard/` run:

   npm run build

2. Then preview the built app (serves the `dist/` directory):

   npm run preview

The preview server uses Vite's preview command and serves the production bundle locally.

## Project structure (high level)

Root files:

- `Week3-Assignment.md` — assignment instructions and requirements (student-facing)
- `README.md` — this file
- `assignment-dashboard/` — main React/Vite application for the assignment

assignment-dashboard/ (important parts)

```
assignment-dashboard/
├── index.html
├── package.json        # scripts: dev, build, preview, lint
├── vite.config.js
├── src/
│   ├── main.jsx        # app entry
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
│   ├── assets/         # images & static files
│   ├── components/     # ApiData, Button, Card, Layout, navbar, TaskManager, ThemeToggle, footer
│   ├── context/        # ThemeContext.jsx
│   ├── hooks/          # useLocalStorage.js
│   └── pages/          # ApiPage.jsx, Home.jsx
└── public/
```

Key components
- `ThemeToggle.jsx` — toggles between themes using `ThemeContext` and persists selection
- `TaskManager.jsx` — example component demonstrating local state and persistence (via `useLocalStorage`)
- `ApiData.jsx` / `ApiPage.jsx` — example of fetching and displaying data from an external API

## Development notes & tips

- ESLint is configured for the assignment (see `assignment-dashboard/eslint.config.js`). Run `npm run lint` inside `assignment-dashboard/` to check linting.
- Vite provides fast refresh and very quick dev builds. If you encounter stale caches, restart the dev server.
- The code uses a small custom hook `useLocalStorage.js` to persist UI state across reloads.
- React Router is included in the root dependencies; if you expand the app to multiple routes, install and configure `react-router-dom` inside `assignment-dashboard/` if needed.

## Troubleshooting

- Long file paths on Windows (OneDrive) can sometimes cause issues when installing node modules; if you see path-too-long errors, enable long paths in Windows or move the repo to a shorter path (e.g., `C:\projects\...`).
- If the dev server port 5173 is in use, Vite will offer another port — check the terminal output.
- If styling doesn't appear as expected, confirm your browser isn't caching old assets. Hard refresh (Ctrl+F5) usually fixes it.

## Contributing

This repository is a student assignment template; contributions are welcome if you're improving the learning experience.

1. Fork the repo
2. Create a topic branch
3. Make changes, run `npm run dev` and verify behavior
4. Open a PR with a description of your changes

## License

Review any LICENSE file in the repository or ask the instructor. This template doesn't add an explicit license header by default.

---

If you'd like, I can also:
- add sample badge(s) for the dev server or build status
- expand the `assignment-dashboard/README.md` with more usage examples (I plan to do this next)
# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
# React.js JSX & CSS Assignment — Mastering Front-End Development

This repository contains the starter and completed code for the Week 3 assignment "React.js, JSX and CSS". The main interactive project lives in the `assignment-dashboard/` folder — a small React + Vite application showcasing component architecture, hooks, context, localStorage persistence, and API integration.

## Table of contents
- Project overview
- Quick start (development)
- Build & preview
- Project structure
- Important files & components
- Development notes & tips
- Troubleshooting
- Contributing

## Project overview

- Framework: React (React 19) with Vite
- Purpose: Demonstrate reusable components, state management with hooks, a Theme context, localStorage persistence, and simple API usage.
- Main app: `assignment-dashboard/` (development server served with Vite)

## Quick start (development)

Prerequisites
- Node.js (recommend v18+). Verify with `node -v`.
- npm (bundled with Node) or yarn.

Install and run the dashboard app (works on Windows PowerShell):

1. Open a terminal and change to the project folder:

   cd assignment-dashboard

2. Install dependencies:

   npm install

3. Start the dev server:

   npm run dev

4. Open the app in your browser (Vite default):

   http://localhost:5173

Notes
- The root `package.json` in this repo only contains shared dependency entries; the actual runnable app and scripts live in `assignment-dashboard/package.json`.

## Build & preview

To create an optimized production build and preview it locally:

1. From `assignment-dashboard/` run:

   npm run build

2. Then preview the built app (serves the `dist/` directory):

   npm run preview

The preview server uses Vite's preview command and serves the production bundle locally.

## Project structure (high level)

Root files:

- `Week3-Assignment.md` — assignment instructions and requirements (student-facing)
- `README.md` — this file
- `assignment-dashboard/` — main React/Vite application for the assignment

assignment-dashboard/ (important parts)

```
assignment-dashboard/
├── index.html
├── package.json        # scripts: dev, build, preview, lint
├── vite.config.js
├── src/
│   ├── main.jsx        # app entry
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
│   ├── assets/         # images & static files
│   ├── components/     # ApiData, Button, Card, Layout, navbar, TaskManager, ThemeToggle, footer
│   ├── context/        # ThemeContext.jsx
│   ├── hooks/          # useLocalStorage.js
│   └── pages/          # ApiPage.jsx, Home.jsx
└── public/
```

Key components
- `ThemeToggle.jsx` — toggles between themes using `ThemeContext` and persists selection
- `TaskManager.jsx` — example component demonstrating local state and persistence (via `useLocalStorage`)
- `ApiData.jsx` / `ApiPage.jsx` — example of fetching and displaying data from an external API

## Development notes & tips

- ESLint is configured for the assignment (see `assignment-dashboard/eslint.config.js`). Run `npm run lint` inside `assignment-dashboard/` to check linting.
- Vite provides fast refresh and very quick dev builds. If you encounter stale caches, restart the dev server.
- The code uses a small custom hook `useLocalStorage.js` to persist UI state across reloads.
- React Router is included in the root dependencies; if you expand the app to multiple routes, install and configure `react-router-dom` inside `assignment-dashboard/` if needed.

## Troubleshooting

- Long file paths on Windows (OneDrive) can sometimes cause issues when installing node modules; if you see path-too-long errors, enable long paths in Windows or move the repo to a shorter path (e.g., `C:\projects\...`).
- If the dev server port 5173 is in use, Vite will offer another port — check the terminal output.
- If styling doesn't appear as expected, confirm your browser isn't caching old assets. Hard refresh (Ctrl+F5) usually fixes it.

## Contributing

This repository is a student assignment template; contributions are welcome if you're improving the learning experience.

1. Fork the repo
2. Create a topic branch
3. Make changes, run `npm run dev` and verify behavior
4. Open a PR with a description of your changes

## License

Review any LICENSE file in the repository or ask the instructor. This template doesn't add an explicit license header by default.

---

If you'd like, I can also:
- add sample badge(s) for the dev server or build status
- expand the `assignment-dashboard/README.md` with more usage examples (I plan to do this next)
