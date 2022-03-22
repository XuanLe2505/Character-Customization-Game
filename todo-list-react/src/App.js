import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);
  const [showInComplete, setShowInComplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status? 1: 0 };
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get one item done at a time" />
      <TaskList
        tasks={tasks}
        showInComplete={showInComplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowInComplete={setShowInComplete}
      />
      <AddTaskForm handleSubmit={handleSubmit} newTask={newTask} handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;
