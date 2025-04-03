import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Preguntas Frecuentes
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              ¿Qué incluye el Plan Básico?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              El Plan Básico incluye:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📅 Horario: 12:00 PM - 6:00 PM" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="🏡 Espacio seguro para jugar y aprender" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="🧠 Talleres creativos y científicos" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📖 Refuerzo en inglés y apoyo con tareas" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="💬 Desarrollo emocional y social" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📌 Descuento: 10% en pago en efectivo" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="span" variant="subtitle2">
              ¿Qué incluye el Plan Extendido?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              El Plan Extendido incluye todo lo del Plan Básico, más:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📅 Horario extendido: 12:00 PM - 8:00 PM" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="🎯 Actividades adicionales" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="🍽️ Opción de cena ligera (consulta disponibilidad)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📌 Descuento: 10% en pago en efectivo" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="span" variant="subtitle2">
              ¿Qué es el Plan OnDemand?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              El Plan OnDemand es ideal para necesidades específicas y días ocasionales. Ofrecemos:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📅 Horario: 12:00 PM - 6:00 PM" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📚 Tutoría personalizada: Q75 por sesión" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="⏳ Jornada diaria completa: Q150 por día" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="📌 Descuento: Paquetes prepagados con tarifa reducida" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}