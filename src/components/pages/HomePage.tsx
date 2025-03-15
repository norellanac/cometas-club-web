import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';
import StarIcon from '@mui/icons-material/Star';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SecurityIcon from '@mui/icons-material/Security';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Hero from './components/Hero';

function HomePage() {
  return (
    <Container>
      <Hero />
      <Features />
      <Pricing />
      <Highlights />
    </Container>
  );
}

export default HomePage;