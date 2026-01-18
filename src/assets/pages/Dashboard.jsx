
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="add-basic" label="Added Text Here" variant="outlined" />
      <TextField id="submit-basic" label="Submitted Text" variant="filled" />
      <TextField id="review-basic" label="Review" variant="standard" />
    </Box>
  );
}

function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    // With `exclusive`, clicking the active button can send null (deselect)
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Monday">Monday</ToggleButton>
      <ToggleButton value="Tuesday">Tuesday</ToggleButton>
      <ToggleButton value="Wednesday">Wednesday</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <BasicTextFields />
      <Box sx={{ mt: 2 }}>
        <ColorToggleButton />
      </Box>
    </Box>
  );
}