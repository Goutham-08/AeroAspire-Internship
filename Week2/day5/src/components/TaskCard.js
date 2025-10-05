import React from "react";
import { Card, CardContent, Typography, IconButton, Stack, Chip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function TaskCard({ task, toggleComplete, deleteTask, darkMode }) {
  return (
    <Card sx={{
      backgroundColor: task.completed ? "rgba(76,175,80,0.06)" : undefined,
      borderLeft: `6px solid ${task.completed ? "#4caf50" : "#9e9e9e"}`
    }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Stack>
          <Typography variant="h6" sx={{ color: task.completed ? "success.main" : "text.primary" }}>
            {task.name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={task.category} size="small" variant="outlined" />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {new Date(task.createdAt).toLocaleString()}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton color={task.completed ? "warning" : "success"} onClick={() => toggleComplete(task.id)}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton color="error" onClick={() => deleteTask(task.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
