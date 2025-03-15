import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SitemarkIcon from './SitemarkIcon';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://cometasclub.com/">
        Cometas Club
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    const whatsappMessage = `Hola, soy ${email}. ${message}`;
    const whatsappUrl = `https://wa.me/50251419213?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Únete a nuestro boletín
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Suscríbete para recibir actualizaciones semanales. ¡No enviamos spam!
            </Typography>
            <InputLabel htmlFor="email-newsletter">Correo Electrónico</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Ingresa tu dirección de correo electrónico"
                placeholder="Tu dirección de correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
                onClick={handleSendMessage}
              >
                Suscribirse
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Servicios
          </Typography>
          <Link component={RouterLink} to="/" color="text.secondary" variant="body2">
            Características
          </Link>
          <Link component={RouterLink} to="/about" color="text.secondary" variant="body2">
            Testimonios
          </Link>
          <Link component={RouterLink} to="/" color="text.secondary" variant="body2">
            Destacados
          </Link>
          <Link component={RouterLink} to="/pricing" color="text.secondary" variant="body2">
            Precios
          </Link>
          <Link component={RouterLink} to="/about" color="text.secondary" variant="body2">
            Preguntas Frecuentes
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Compañía
          </Typography>
          <Link component={RouterLink} to="/about" color="text.secondary" variant="body2">
            Sobre Nosotros
          </Link>
          <Link component={RouterLink} to="/" color="text.secondary" variant="body2">
            Carreras
          </Link>
          <Link component={RouterLink} to="/" color="text.secondary" variant="body2">
            Prensa
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>
          <Link component={RouterLink} to="/terms" color="text.secondary" variant="body2">
            Términos
          </Link>
          <Link component={RouterLink} to="/privacy" color="text.secondary" variant="body2">
            Privacidad
          </Link>
          <Link component={RouterLink} to="/contact" color="text.secondary" variant="body2">
            Contacto
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link component={RouterLink} to="/privacy" color="text.secondary" variant="body2">
            Política de Privacidad
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link component={RouterLink} to="/terms" color="text.secondary" variant="body2">
            Términos de Servicio
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com/people/Cometas-Club/61574187088378/"
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/cometasclubinfantil/"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://wa.me/50251419213"
            aria-label="WhatsApp"
            sx={{ alignSelf: 'center' }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}