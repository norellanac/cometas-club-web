import { Container, Typography, TextField, Button } from '@mui/material';

function ContactPage() {
  return (
    <Container>
      <Typography variant="h2">Contact Us</Typography>
      <TextField label="Your Email" fullWidth margin="normal" />
      <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
      <Button variant="contained" color="primary">Send Message</Button>
    </Container>
  );
}

export default ContactPage;