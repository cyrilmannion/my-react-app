
// src/assets/pages/Login.jsx
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

// Local helper component: a row of buttons
function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Log In</Button>
      <Button variant="contained">Log Out</Button>
      <Button variant="outlined">Forgot Password</Button>
    </Stack>
  );
}

// Local helper component: FABs shown inline in the page flow
function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}

// One exported component per file
export default function Login() {
  return (
    <Box sx={{ p: 3 }}>
      <h1>Login</h1>

      {/* Buttons row */}
      <Box sx={{ mb: 3 }}>
        <BasicButtons />
      </Box>

      {/* FABs block (inline visible with the page flow) */}
      <FloatingActionButtons />
    </Box>
  );
}