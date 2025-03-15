import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/organisms/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import './App.css';
import MarketingPage from './components/pages/MarketingPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007AB8',
    },
    secondary: {
      main: '#FCCA4A',
    },
    background: {
      default: '#F5F5F5',
    },
    error: {
      main: '#F1774D',
    },
    info: {
      main: '#007AB8',
    },
    warning: {
      main: '#FCCA4A',
    },
    success: {
      main: '#44AD88',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<MarketingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;