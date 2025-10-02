import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Home({ tasks, setTasks }) {
  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        My Tasks
      </Typography>
      <Stack spacing={2}>
        {tasks.length === 0 ? (
          <Typography>No tasks yet. Go to Add Task page.</Typography>
        ) : (
          tasks.map((task, i) => (
            <Card key={i}>
              <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>{task}</Typography>
                <Button color="error" onClick={() => handleDelete(i)}>
                  <DeleteIcon />
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Stack>
    </div>
  );
}

export default Home;
