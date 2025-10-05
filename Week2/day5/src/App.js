import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

function App() {
  // load initial tasks from localStorage safely
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persist tasks whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage", e);
    }
  }, [tasks]);

  // Theme toggle
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
          secondary: { main: "#f50057" },
        },
        components: {
          MuiAppBar: { defaultProps: { elevation: 3 } },
        },
      }),
    [darkMode]
  );

  // task helpers
  const addTask = (name, category = "General") => {
    const newTask = {
      id: Date.now(),
      name,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ minHeight: "100vh", background: theme.palette.background.default }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Task Management System
              </Typography>

              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/add">Add Task</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>

              <IconButton
                color="inherit"
                onClick={() => setDarkMode((d) => !d)}
                aria-label="toggle theme"
                sx={{ ml: 1 }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>

          <Container maxWidth="md" sx={{ py: 3 }}>
            <Routes>
              <Route path="/" element={
                <Home
                  tasks={tasks}
                  setTasks={setTasks}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                  darkMode={darkMode}
                />
              } />
              <Route path="/add" element={
                <AddTask addTask={addTask} darkMode={darkMode} />
              } />
              <Route path="/about" element={<About darkMode={darkMode} />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
