import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";

import { CheckCircle, Delete, TaskAlt } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: { main: "#ff7700ff" },
    secondary: { main: "#f50057" },
  },
});

function Home({ tasks, toggleComplete, deleteTask }) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Lists of Tasks
      </Typography>
      {tasks.length === 0 && <Typography>No tasks available</Typography>}
      <Stack spacing={2}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            style={{
              backgroundColor: task.completed ? "#e0f7fa" : "#fff",
            }}
          >
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Typography variant="h6">{task.text}</Typography>
                <Typography
                  variant="body2"
                  color={task.completed ? "green" : "red"}
                >
                  {task.completed ? "Completed" : "Pending"}
                </Typography>
              </div>
              <div>
                <IconButton
                  color="success"
                  onClick={() => toggleComplete(task.id)}
                >
                  <CheckCircle />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "70%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        What's Up With This App
      </Typography>
      <Typography>
        This is a Task Management System built with React, React Router and
        Material UI. You can add, complete, and delete tasks. Tasks are saved
        automatically in your browser and will persist even if you refresh the
        page.
      </Typography>
    </Container>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <TaskAlt style={{ marginRight: "10px" }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Task Management System
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Task
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          }
        />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
