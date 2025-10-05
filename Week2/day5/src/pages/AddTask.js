import React from "react";
import { Container, Typography } from "@mui/material";
import TaskForm from "../components/TaskForm";

function AddTask({ addTask, darkMode }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, color: darkMode ? "white" : "initial" }}>Add a new task</Typography>
      <TaskForm addTask={addTask} />
    </Container>
  );
}

export default AddTask;
