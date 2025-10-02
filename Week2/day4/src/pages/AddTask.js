import React, { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";

function AddTask({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Add a New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Task name"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <Button type="submit" variant="contained">
            Add Task
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default AddTask;
