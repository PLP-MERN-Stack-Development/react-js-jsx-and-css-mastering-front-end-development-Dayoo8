
# assignment-dashboard (React + Vite)

This folder contains the React + Vite app used for the Week 3 assignment. It's a small dashboard project that demonstrates component composition, theme context, localStorage persistence via a custom hook, and simple API integration.

## Quick start

Install dependencies and start the dev server (from within this folder):

1. Install:

	npm install

2. Start dev server:

	npm run dev

3. Build for production:

	npm run build

4. Preview built app locally:

	npm run preview

5. Lint the codebase:

	npm run lint

The dev server runs on Vite's default port (usually http://localhost:5173). If that port is in use, Vite will suggest an alternate port.

## Scripts

- `dev` — start Vite dev server (hot module replacement)
- `build` — build a production bundle into `dist/`
- `preview` — locally preview the production build
- `lint` — run ESLint over the project

## Project structure (inside `assignment-dashboard/`)

```
assignment-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── ApiData.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── footer.jsx
│   │   ├── Layout.jsx
│   │   ├── navbar.jsx
│   │   ├── TaskManager.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   └── pages/
│       ├── ApiPage.jsx
│       └── Home.jsx
└── public/
```

## Key components & behavior

- `ThemeContext.jsx` — provides theme state (light/dark) to the app and persists the choice using `useLocalStorage`.
- `useLocalStorage.js` — small custom hook to sync state to localStorage.
- `TaskManager.jsx` — a small example component that demonstrates add/edit/remove tasks and persistence.
- `ApiData.jsx` / `ApiPage.jsx` — demonstrates fetching and rendering external data.

## Dev notes

- React version used: ^19.x
- Vite is configured with `@vitejs/plugin-react` for fast refresh.
- ESLint configuration exists at `assignment-dashboard/eslint.config.js` for basic linting rules.

If you plan to extend the project to production, consider adding TypeScript and a CI lint/build step.

## Troubleshooting & tips

- If `npm install` fails with path length errors on Windows, consider moving the repo to a shorter path (e.g., `C:\projects\...`) or enabling long paths in Windows settings.
- If assets/styles do not update, try restarting the Vite dev server.
- If the app fails to start, check the terminal for the port and any dependency errors.

## Where to look next

- `src/components/TaskManager.jsx` — good place to see local state and how `useLocalStorage` is used
- `src/context/ThemeContext.jsx` — demonstrates Context API usage
- `src/pages/ApiPage.jsx` — example API consumption and presentation

---

If you'd like, I can add a small troubleshooting checklist or run the dev server from here and verify it starts — tell me if you want me to run it now and which terminal to use.
