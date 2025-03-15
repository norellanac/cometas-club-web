import * as React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ColorModeIconDropdown() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleColorMode = () => {
    // Implement your color mode toggle logic here
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="color mode"
        aria-controls="color-mode-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Menu
        id="color-mode-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'color-mode-button',
        }}
      >
        <MenuItem onClick={handleToggleColorMode}>
          {theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </MenuItem>
      </Menu>
    </>
  );
}