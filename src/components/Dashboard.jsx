import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cards = [
  { id: 1, title: 'Vehicles', description: '25' },
  { id: 2, title: 'Drivers', description: '12' },
  { id: 3, title: 'Total Trips', description: '158' },
  { id: 4, title: 'Vehicles in Maintenance', description: '3' },
];

function SelectActionCard() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: 5,
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            width: 160,
            backgroundColor: '#E6D8C3',
            height: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid #ccc',
          }}
        >
          <CardContent sx={{ padding: '0 !important' }}>
            <Typography variant="subtitle1" component="div" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
