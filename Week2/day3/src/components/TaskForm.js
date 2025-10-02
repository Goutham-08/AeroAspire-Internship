import React, { useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    } else if (task.length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }

    addTask(task, category);
    setTask("");
    setCategory("General");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} style={{ marginBottom: "20px" }}>
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
          style={{ minWidth: "120px" }}
        >
          <MenuItem value="General">General</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Learning">Learning</MenuItem>
          <MenuItem value="Meeting">Meeting</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Stack>
    </form>
  );
}

export default TaskForm;
