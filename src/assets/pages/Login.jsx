import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="Log In">Text</Button>
      <Button variant="Log Out">Contained</Button>
      <Button variant="Forgot Password">Outlined</Button>
    </Stack>
  );
}