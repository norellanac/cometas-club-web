import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import HomePage from './components/pages/HomePage'
import ContactPage from './components/pages/ContactPage'
import './App.css'
import MarketingPage from './components/pages/MarketingPage'
import AppAppBar from './components/pages/components/AppAppBar'
import AppTheme from './components/shared-theme/AppTheme'
import { Divider } from '@mui/material'
import Footer from './components/pages/components/Footer'
import LogoCollection from './components/pages/components/LogoCollection'


function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Router>
      <AppAppBar />
        <AppAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<MarketingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {/* <LogoCollection /> */}
        <Divider />
        <Footer />
      </Router>
    </AppTheme>
  )
}

export default App
