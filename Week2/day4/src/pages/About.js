import React from "react";
import { Typography } from "@mui/material";

function About() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        About This App
      </Typography>
      <Typography>
        This is a simple task manager built with React, React Router, and MUI. 
        It supports adding tasks, viewing them, deleting them, and saving to localStorage.
      </Typography>
    </div>
  );
}

export default About;
