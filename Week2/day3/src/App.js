import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Stack,
  LinearProgress,
  Button,
  ButtonGroup,
} from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState("newest"); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName, category) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      category: category,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOption === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOption === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortOption === "completed") return b.completed - a.completed;
    if (sortOption === "pending") return a.completed - b.completed;
    return 0;
  });

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <Container maxWidth="sm" style={{ marginTop: "30px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>

      {/* Task Form */}
      <TaskForm addTask={addTask} />

      {/* Task Count & Progress */}
      <Typography variant="subtitle1">
        {completedTasks} of {tasks.length} tasks completed
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ marginBottom: "20px", height: "8px", borderRadius: "4px" }}
      />

      {/* Sorting Buttons */}
      <ButtonGroup variant="outlined" style={{ marginBottom: "20px" }}>
        <Button onClick={() => setSortOption("newest")}>Newest</Button>
        <Button onClick={() => setSortOption("oldest")}>Oldest</Button>
        <Button onClick={() => setSortOption("completed")}>Completed</Button>
        <Button onClick={() => setSortOption("pending")}>Pending</Button>
      </ButtonGroup>

      {/* Task List */}
      <Stack spacing={2}>
        {sortedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
