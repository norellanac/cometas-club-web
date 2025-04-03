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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, textAlign: 'center' }}>
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
  const [message, setMessage] = React.useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSendMessage = () => {
    const whatsappMessage = `Hola, me gustaría recibir más información sobre Cometas Club. ${message}`;
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
        py: { xs: 4, sm: 8 },
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          gap: { xs: 4, sm: 0 },
        }}
      >
        {/* Contact Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: { xs: '100%', sm: '60%' },
          }}
        >
          <Box>
            <SitemarkIcon />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Contáctanos por WhatsApp
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Envíanos un mensaje para recibir información personalizada. ¡Estamos aquí para ayudarte!
            </Typography>
            <InputLabel htmlFor="whatsapp-message" sx={{ display: 'none' }}>
              Tu Mensaje
            </InputLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
            >
              <TextField
                id="whatsapp-message"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Ingresa tu mensaje"
                placeholder="Escribe tu mensaje aquí"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ width: { xs: '100%', sm: '250px' } }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0, width: { xs: '100%', sm: 'auto' } }}
                onClick={handleSendMessage}
              >
                Enviar por WhatsApp
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* Social Media Icons for Desktop */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <IconButton
              color="primary"
              size="large"
              href="https://www.facebook.com/people/Cometas-Club/61574187088378/"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="secondary"
              size="large"
              href="https://www.instagram.com/cometasclubinfantil/"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="success"
              size="large"
              href="https://wa.me/50251419213"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 4,
          mt: 4,
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: { xs: 'center', sm: 'left' } }}>
          Política de Privacidad • Términos de Servicio
        </Typography>
        <Copyright />
      </Box>

      {/* Floating Social Media Icons for Mobile */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            zIndex: 1000,
            backgroundColor: 'background.paper',
            padding: 2,
            boxShadow: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <IconButton
            color="primary"
            size="large"
            href="https://www.facebook.com/people/Cometas-Club/61574187088378/"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="secondary"
            size="large"
            href="https://www.instagram.com/cometasclubinfantil/"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="success"
            size="large"
            href="https://wa.me/50251419213"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      )}
    </Container>
  );
}