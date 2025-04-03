import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const tiers = [
  {
    title: 'Plan OnDemand',
    price: '175',
    time: 'día',
    description: [
      '📅 Horario: 12:00 PM - 6:00 PM',
      '🎨 Acceso a actividades y talleres únicos',
      '⏳ Ideal para días ocasionales',
      '📦 Materiales incluidos para cada sesión',
      '📚 Tutoría personalizada: Q100 por sesión',
      '💵 Descuento: 10% en pagos en efectivo',
    ],
    buttonText: 'Reserva tu día',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Plan Básico',
    subheader: 'Más Popular',
    price: '1,299',
    time: 'mes',
    description: [
      '📅 Horario: 12:00 PM - 6:00 PM',
      '🏡 Espacio seguro para jugar y aprender',
      '🧠 Talleres creativos y científicos',
      '📖 Refuerzo y apoyo con tareas escolares',
      '💬 Desarrollo emocional y social',
      '🤝 Atención personalizada para cada niño',
      '📦 Materiales básicos incluidos',
      '💵 Descuento: 10% en pagos en efectivo',
    ],
    buttonText: 'Elige este plan',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Plan Premium',
    price: '1,699',
    time: 'mes',
    description: [
      '📅 Horario extendido: 12:00 PM - 8:00 PM',
      '🏡 Todo lo del Plan Básico, más:',
      '🎯 Actividades adicionales para potenciar el aprendizaje',
      '🎨 Talleres creativos y científicos',
      '📖 Refuerzo y apoyo con tareas escolares',
      '💬 Desarrollo emocional y social',
      '🤝 Atención personalizada para cada niño',
      '💵 Descuento: 10% en pagos en efectivo',
    ],
    buttonText: 'Obtén lo mejor',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

const handleWhatsAppClick = (tier) => {
  const { title, price } = tier;
  const phoneNumber = '50251419213';
  const message = `Hola, estoy interesado en el ${title} por Q${price}. ¿Podrían darme más información?`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export default function Pricing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container
      id="pricing"
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
          Planes que se adaptan a ti
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Descubre nuestras opciones diseñadas para el cuidado y desarrollo integral de tus hijos. ¡Elige el plan perfecto para ti!
        </Typography>
      </Box>
      {isMobile ? (
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Pricing Plans"
            sx={{ mb: 2 }}
          >
            {tiers.map((tier, index) => (
              <Tab key={tier.title} label={tier.title} />
            ))}
          </Tabs>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Typography component="h3" variant="h6">
                  {tiers[selectedTab].title}
                </Typography>
                {tiers[selectedTab].subheader && (
                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label={tiers[selectedTab].subheader}
                    color="secondary"
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <Typography component="h3" variant="h2">
                  Q. {tiers[selectedTab].price}
                </Typography>
                <Typography component="h3" variant="h6">
                  &nbsp; por {tiers[selectedTab].time}
                </Typography>
              </Box>
              <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  m: 0,
                  p: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                {tiers[selectedTab].description.map((line) => (
                  <Box
                    component="li"
                    key={line}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <Typography variant="subtitle2" component="span" align="left">
                      {line}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant={tiers[selectedTab].buttonVariant as 'outlined' | 'contained'}
                color={tiers[selectedTab].buttonColor as 'primary' | 'secondary'}
                onClick={() => handleWhatsAppClick(tiers[selectedTab])}
              >
                {tiers[selectedTab].buttonText}
              </Button>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          {tiers.map((tier) => (
            <Grid
              size={{ xs: 12, sm: tier.title === 'Plan Premium' ? 12 : 6, md: 4 }}
              key={tier.title}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  height: '100%',
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {tier.subheader && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        color="secondary"
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <Typography component="h3" variant="h2">
                      Q. {tier.price}
                    </Typography>
                    <Typography component="h3" variant="h6">
                      &nbsp; por {tier.time}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                  <Box
                    component="ul"
                    sx={{
                      listStyle: 'none',
                      m: 0,
                      p: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                    }}
                  >
                    {tier.description.map((line) => (
                      <Box
                        component="li"
                        key={line}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1,
                        }}
                      >
                        <Typography variant="subtitle2" component="span" align="left">
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    color={tier.buttonColor as 'primary' | 'secondary'}
                    onClick={() => handleWhatsAppClick(tier)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}