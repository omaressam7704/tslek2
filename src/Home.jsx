import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import SelectActionCard from './components/Dashboard';
import Charts from './components/Charts';
import Vehicles from './components/pages/Vehicles';
import Drivers from './components/pages/Drivers';
import Maintenance from './components/pages/Maintenance';
import Reports from './components/pages/Reports';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({ palette: { mode: 'light' } });

function Home() {
    const [currentView, setCurrentView] = useState('Home');

    const renderContent = () => {
        switch (currentView) {
            case 'Home':
                return (
                    <>

                        <Box sx={{ mt: 4, }}>
                            <Charts />
                            <Box sx={{ mt: 4 }}></Box>

                        </Box>
                    </>
                );
            case 'Vehicles':
                return <Vehicles />;
            case 'Drivers':
                return <Drivers />;
            case 'Maintenance':
                return <Maintenance />;
            case 'Reports':
                return <Reports />;
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>

                <Sidebar onSelect={setCurrentView} selectedItem={currentView} />
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <SearchBar />
                    <Box sx={{ p: 2, flexGrow: 1 }}>
                        {renderContent()}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Home;
