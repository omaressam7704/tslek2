import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PeopleIcon from '@mui/icons-material/People';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DescriptionIcon from '@mui/icons-material/Description';

import logo from '../assets/logo.png';

const drawerWidth = 170;

function ResponsiveDrawer({ onSelect, selectedItem }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Vehicles", icon: <DriveEtaIcon /> },
    { text: "Drivers", icon: <PeopleIcon /> },
    { text: "Maintenance", icon: <CarRepairIcon /> },
    { text: "Reports", icon: <DescriptionIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: '100%', maxHeight: '70px', objectFit: 'contain' }} />
      </Toolbar>
      <Divider />
      <List
        sx={{
          color: 'white',
          '& .MuiListItemIcon-root': { color: 'white' },
          '& .MuiSvgIcon-root': { fontSize: 20 },
          '& .MuiListItemText-primary': { fontSize: 14 },
          '& .MuiListItem-root': { marginBottom: '15px', marginTop: '10px' },
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                onSelect(item.text);
                setMobileOpen(false);
              }}
              selected={selectedItem === item.text}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 25 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Menu button يظهر فقط في الشاشات الصغيرة */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          top: 5,
          left: 5,
          zIndex: 1300,
          display: { xs: 'block', sm: 'none' }
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer للموبايل فقط */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#5D866C',
            color: 'white',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer ثابت للشاشات الكبيرة */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#13522aff',
            color: 'white',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
