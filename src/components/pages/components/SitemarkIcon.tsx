import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import cometasLogocolor from './../../../assets/cometas-logo-color.png';
import cometasLogoWhite from './../../../assets/cometas-logo-white.png';

export default function SitemarkIcon() {
  const theme = useTheme();

  return (
    <img
      src={theme.palette.mode === 'dark' ? cometasLogoWhite : cometasLogocolor}
      alt="Cometas Logo"
      style={{  height: '40px' }}
    />
  );
}