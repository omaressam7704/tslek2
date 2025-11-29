import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': { backgroundColor: alpha(theme.palette.common.black, 0.1) },
  width: '300px', // أصغر شوية
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    width: '100%',
    fontSize: '13px', // نصغّر الخط شوية
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'fixed', top: '4px' }}>

      <Toolbar sx={{ position: 'fixed', top: 0, minHeight: '48px !important', paddingTop: '3% !important', paddingBottom: '2% !important' }}>
        {/* Search في النص */}
        <Box sx={{ position: 'fixed', left: '20%' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#000', fontSize: 16 }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1, width: '100%' }}></Box>
        {/* الأيقونات على أقصى اليمين */}
        <Box sx={{ position: 'fixed', left: '90%', marginLeft: 'auto', display: 'flex', gap: 0.5 }}>
          <IconButton size="small" sx={{ color: '#000000ff' }}>
            <MailIcon sx={{ fontSize: 18, color: '#000000ff' }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#000000ff' }}>
            <NotificationsIcon sx={{ fontSize: 18, color: '#000000ff' }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#000000ff' }} onClick={handleProfileMenuOpen}>
            <AccountCircle sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

      </Toolbar>

      {renderMenu}
    </Box >
  );

}
