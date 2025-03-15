import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Ana Pérez" src="/static/images/avatar/1.jpg" />,
    name: 'Ana Pérez',
    occupation: 'Madre de familia',
    testimonial:
      "El centro ha sido una bendición para mi hijo. Ha mejorado en sus tareas escolares y ha hecho muchos amigos. ¡Estamos muy contentos con el servicio!",
  },
  {
    avatar: <Avatar alt="Carlos Gómez" src="/static/images/avatar/2.jpg" />,
    name: 'Carlos Gómez',
    occupation: 'Padre de familia',
    testimonial:
      "Mi hija disfruta mucho de las actividades recreativas y los talleres creativos. El personal es muy atento y profesional. ¡Recomendado!",
  },
  {
    avatar: <Avatar alt="María López" src="/static/images/avatar/3.jpg" />,
    name: 'María López',
    occupation: 'Madre de familia',
    testimonial:
      'El refuerzo en inglés y tareas ha sido de gran ayuda para mi hijo. Ha mejorado sus calificaciones y se siente más seguro en la escuela.',
  },
  {
    avatar: <Avatar alt="Juan Martínez" src="/static/images/avatar/4.jpg" />,
    name: 'Juan Martínez',
    occupation: 'Padre de familia',
    testimonial:
      "El desarrollo emocional y social que promueven en el centro es increíble. Mi hijo ha aprendido a trabajar en equipo y a expresar sus emociones.",
  },
  {
    avatar: <Avatar alt="Laura Sánchez" src="/static/images/avatar/5.jpg" />,
    name: 'Laura Sánchez',
    occupation: 'Madre de familia',
    testimonial:
      "Las instalaciones son seguras y adecuadas para los niños. Mi hija se siente muy cómoda y feliz en el centro.",
  },
  {
    avatar: <Avatar alt="Pedro Fernández" src="/static/images/avatar/6.jpg" />,
    name: 'Pedro Fernández',
    occupation: 'Padre de familia',
    testimonial:
      "El personal es muy profesional y siempre están dispuestos a ayudar. Mi hijo ha tenido una experiencia muy positiva en el centro.",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Testimonios
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Descubre lo que los padres dicen sobre nuestro centro de cuidado y enseñanza para niños. Nos enorgullece ofrecer un ambiente seguro y educativo para el desarrollo integral de los niños.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}