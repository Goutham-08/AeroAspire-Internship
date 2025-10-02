import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <Card
      style={{
        backgroundColor: task.completed ? "#e8f5e9" : "#fff",
        borderLeft: task.completed ? "6px solid green" : "6px solid gray",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Typography
              variant="h6"
              style={{
                color: task.completed ? "green" : "black",
                fontWeight: task.completed ? "bold" : "normal",
              }}
            >
              {task.name}
            </Typography>
            <Chip
              label={task.category}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              color={task.completed ? "warning" : "success"}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
