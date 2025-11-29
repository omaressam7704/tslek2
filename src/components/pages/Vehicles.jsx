import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Vehicles() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Vehicles Page</Typography>
            <Typography paragraph>
                This is the Vehicles page content.
            </Typography>
        </Box>
    );
}
