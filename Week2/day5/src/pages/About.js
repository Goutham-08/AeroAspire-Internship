import React from "react";
import { Container, Typography } from "@mui/material";

function About({ darkMode }) {
  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, color: darkMode ? "white" : "initial" }}>About</Typography>
      <Typography sx={{ color: darkMode ? "#ccc" : undefined }}>
        Simple Task Management System built with React, React Router and Material UI.
        Add tasks, mark as complete, delete, search, filter, and switch theme.
      </Typography>
    </Container>
  );
}

export default About;
