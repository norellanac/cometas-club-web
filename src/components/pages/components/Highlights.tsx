import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Imaginación',
    description:
      'Fomentamos la creatividad y la imaginación a través de actividades divertidas y educativas.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Aprendizaje',
    description:
      'Ofrecemos un entorno de aprendizaje seguro y estimulante para que los niños desarrollen sus habilidades.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Comunidad',
    description:
      'Promovemos un sentido de comunidad y colaboración entre los niños y sus familias.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Espacio seguro para CREAR Y JUGAR',
    description:
      'Proporcionamos un espacio seguro donde los niños pueden explorar, crear y jugar libremente.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Refuerzo en INGLÉS Y TAREAS',
    description:
      'Ofrecemos apoyo en inglés y tareas para ayudar a los niños a tener éxito en la escuela.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Talleres creativos y científicos',
    description:
      'Organizamos talleres creativos y científicos para estimular el interés y la curiosidad de los niños.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Desarrollo emocional y social',
    description:
      'Fomentamos el desarrollo emocional y social a través de actividades grupales y apoyo personalizado.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={(theme) => ({
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: theme.palette.mode === 'dark' ? 'white' : 'black',
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
      })}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4" gutterBottom>
            Destacados
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Descubre por qué nuestro centro de cuidado y enseñanza para niños se destaca: imaginación, aprendizaje, comunidad, y más.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={(theme) => ({
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: theme.palette.mode === 'dark' ? 'hsla(220, 25%, 25%, 0.3)' : 'hsla(220, 25%, 75%, 0.3)',
                  backgroundColor: theme.palette.mode === 'dark' ? 'grey.800' : 'white',
                })}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}