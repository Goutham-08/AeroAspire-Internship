import React, { useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) {
      setError("Task cannot be empty");
      return;
    } 
    if (trimmed.length < 2) {
      setError("Too short");
      return;
    }
    addTask(trimmed, category);
    setTask("");
    setCategory("General");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 140 }}
        >
          <MenuItem value="General">General</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Learning">Learning</MenuItem>
          <MenuItem value="Meeting">Meeting</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
        </TextField>
        <Button type="submit" variant="contained">Add</Button>
      </Stack>
    </form>
  );
}

export default TaskForm;
