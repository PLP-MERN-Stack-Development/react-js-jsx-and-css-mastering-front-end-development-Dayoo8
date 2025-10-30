import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-blue-500"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

