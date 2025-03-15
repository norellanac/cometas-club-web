import { Container, Typography, TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import FAQ from './components/FAQ'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    const whatsappMessage = `Hola, soy ${name} (${email}). ${message}`
    const whatsappUrl = `https://wa.me/51419213?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Box
        id="highlights"
        sx={(theme) => ({
          mt: { xs: 4, sm: 16 },
          mb: { xs: 8, sm: 18 },
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
            <Typography variant="h2" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body1" gutterBottom>
              Si tienes alguna pregunta o necesitas más información sobre
              nuestros servicios de cuidado y enseñanza para niños, no dudes en
              contactarnos. Estamos aquí para ayudarte.
            </Typography>
            <TextField
              label="Tu Nombre"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Tu Correo Electrónico"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Mensaje"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              Enviar Mensaje
            </Button>
          </Box>
        </Container>
      </Box>

      <FAQ />
    </>
  )
}

export default ContactPage
