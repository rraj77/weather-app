import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomProgressBar from './CustomSwitchProgress';

type HumidityDisplayProps = {
  humidity: number;
};

const HumidityDisplay = ({ humidity }: HumidityDisplayProps) => {
  const getHumidityStatus = () => {
    if (humidity < 30) {
      return { icon: '☀️', text: 'Low' };
    } else if (humidity >= 30 && humidity <= 60) {
      return { icon: '🤙🏻', text: 'Normal' };
    } else {
      return { icon: '💧', text: 'High' };
    }
  };

  const { icon, text } = getHumidityStatus();

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap={4}>
        <Box gap="3px" sx={{ display: 'flex' }}>
          <Typography variant="h3">{humidity}</Typography>
          <Typography variant='h6'>%</Typography>
        </Box>
        <Typography>
          {text} {icon}
        </Typography>
      </Stack>
      <CustomProgressBar progress={humidity} />
    </Stack>
  );
};

export default HumidityDisplay;
