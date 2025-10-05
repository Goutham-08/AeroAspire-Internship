import React, { useMemo, useState } from "react";
import { Container, Stack, TextField, Typography, LinearProgress, ButtonGroup, Button } from "@mui/material";
import TaskCard from "../components/TaskCard";

function Home({ tasks = [], setTasks, toggleComplete, deleteTask, darkMode }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | pending | completed
  const [sortOption, setSortOption] = useState("newest");

  const filtered = useMemo(() => {
    return tasks
      .filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
      .filter(t => {
        if (filter === "all") return true;
        if (filter === "completed") return t.completed;
        return !t.completed;
      })
      .sort((a, b) => {
        if (sortOption === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
        if (sortOption === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
        if (sortOption === "completed") return (b.completed === a.completed) ? 0 : b.completed ? 1 : -1;
        return 0;
      });
  }, [tasks, search, filter, sortOption]);

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = tasks.length ? (completedCount / tasks.length) * 100 : 0;

  return (
    <Container maxWidth="md">
      <Typography variant="h5" sx={{ mb: 2 }}>My List of Tasks</Typography>

      <TextField label="Search tasks" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} sx={{ mb: 2 }} />

      <Typography variant="subtitle1" sx={{ mb: 1 }}>{completedCount} of {tasks.length} tasks completed</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 1, mb: 2 }} />

      <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
        <ButtonGroup variant="outlined">
          <Button onClick={() => setSortOption("newest")}>Newest</Button>
          <Button onClick={() => setSortOption("oldest")}>Oldest</Button>
          <Button onClick={() => setSortOption("completed")}>Completed</Button>
        </ButtonGroup>

        <ButtonGroup variant="outlined">
          <Button onClick={() => setFilter("all")}>All</Button>
          <Button onClick={() => setFilter("pending")}>Pending</Button>
          <Button onClick={() => setFilter("completed")}>Completed</Button>
        </ButtonGroup>
      </Stack>

      <Stack spacing={2}>
        {filtered.length === 0 ? <Typography>No tasks found</Typography> : filtered.map(task => (
          <TaskCard key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        ))}
      </Stack>
    </Container>
  );
}

export default Home;
