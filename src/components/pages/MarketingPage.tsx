import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
     <>
      {/* <Hero /> */}
      <div>
        {/* <Features /> */}
        <Divider />
        <Testimonials />
        <Divider />
        {/* <Highlights /> */}
        <Divider />
        <Divider />
        <FAQ />
      </div>
     </>
  );
}
