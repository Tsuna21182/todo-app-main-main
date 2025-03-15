import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function useTodoHook() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = () => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  };

  const getTotalTasks = () => tasks.length;

  return {
    task,
    tasks: filteredTasks(),
    setTask,
    handleAddTask,
    handleRemoveTask,
    toggleTask,
    clearCompleted,
    setFilter,
    filter,
    getTotalTasks,
  };
}

export default useTodoHook;
