import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Maintenance() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Maintenance Page</Typography>
            <Typography paragraph>
                This is the Maintenance page content.
            </Typography>
        </Box>
    );
}
