import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Homepage!
      </Typography>
      <Typography variant="body1">
        This is a sample homepage using Material UI Typography and AppBar.
      </Typography>
    </Box>
  );
}

export default Home;
