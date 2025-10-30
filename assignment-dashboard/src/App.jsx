// src/App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Task Manager App
          </h1>
          <ThemeToggle />
        </header>

        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Task 1" content="Set up project structure" />
          <Card title="Task 2" content="Build reusable components" />
          <Card title="Task 3" content="Integrate API and state" />
        </main>

        <footer className="text-center py-4 text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Dayoo8 — All rights reserved
        </footer>
      </div>
    </ThemeProvider>
  );
}
