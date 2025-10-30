import Layout from "../components/Layout";
import TaskManager from "../components/TaskManager";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="flex justify-end mb-4">
        <Button variant="secondary" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>
      <TaskManager />
    </Layout>
  );
}
