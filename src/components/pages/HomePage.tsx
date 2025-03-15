import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';
import StarIcon from '@mui/icons-material/Star';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SecurityIcon from '@mui/icons-material/Security';

function HomePage() {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h2" gutterBottom color="primary">
          Donde los niños EXPLORAN, CREAN Y CRECEN.
        </Typography>
        <Typography variant="h5" gutterBottom color="secondary">
          Para niños de 6 a 12 años
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <StarIcon color="warning" fontSize="large" />
            <Typography variant="h6">Imaginación</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <RocketIcon color="info" fontSize="large" />
            <Typography variant="h6">Aprendizaje</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <CloudIcon color="error" fontSize="large" />
            <Typography variant="h6">Comunidad</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box my={4} textAlign="center">
        <Typography variant="body1" color="textPrimary">
          Espacio seguro para CREAR Y JUGAR.
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Refuerzo en INGLÉS Y TAREAS.
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Talleres creativos y CIENTÍFICOS.
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Desarrollo emocional y social.
        </Typography>
      </Box>
      <Box textAlign="center" my={4}>
        <Button variant="contained" color="primary" size="large">
          ¡ÚNETE A LA AVENTURA!
        </Button>
        <Typography variant="h6" mt={2} color="secondary">
          5141-9213
        </Typography>
      </Box>
      <Box textAlign="center" my={4}>
        <img src="/images/rocket.png" alt="Rocket" style={{ width: '100px', margin: '0 10px' }} />
        <img src="/images/star.png" alt="Star" style={{ width: '100px', margin: '0 10px' }} />
        <img src="/images/comet.png" alt="Comet" style={{ width: '100px', margin: '0 10px' }} />
      </Box>
    </Container>
  );
}

export default HomePage;