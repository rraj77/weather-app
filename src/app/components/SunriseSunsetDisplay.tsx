import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type SunriseSunsetDisplayProps = {
  sunrise: string;
  sunset: string;
};

const ArrowIconStyled = styled(Box)(() => ({
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  background: 'linear-gradient(90deg, #FFDD00 0%, #FFAA00 100%)',
  color: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const calculateTimePassed = (targetTime: string): string => {
  const now = new Date();
  const [time, modifier] = targetTime.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );

  const diffInSeconds: number = Math.floor(
    (now.getTime() - targetDate.getTime()) / 1000
  );

  const minutesDiff = Math.floor(Math.abs(diffInSeconds) / 60);
  const secondsDiff = Math.abs(diffInSeconds) % 60;

  return `${diffInSeconds < 0 ? '-' : '+'}${minutesDiff}m ${secondsDiff}s`;
};

function SunriseSunsetDisplay({ sunrise, sunset }: SunriseSunsetDisplayProps) {
  const [timeSinceSunrise, setTimeSinceSunrise] = useState('');
  const [timeUntilSunset, setTimeUntilSunset] = useState('');

  useEffect(() => {
    const timeSinceSunriseCalc = calculateTimePassed(sunrise);
    setTimeSinceSunrise(timeSinceSunriseCalc);

    const timeUntilSunsetCalc = calculateTimePassed(sunset);
    setTimeUntilSunset(timeUntilSunsetCalc);
  }, [sunrise, sunset]);

  return (
    <Stack gap={2}>
      <Box gap="20px" sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowIconStyled>
          <ArrowUpwardIcon sx={{ fontSize: '16px' }} />
        </ArrowIconStyled>
        <Box>
          <Typography>{sunrise}</Typography>
          <Typography color='grey' fontSize="10px">{timeSinceSunrise}</Typography>
        </Box>
      </Box>

      <Box gap="20px" sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowIconStyled>
          <ArrowDownwardIcon sx={{ fontSize: '16px' }} />
        </ArrowIconStyled>
        <Box>
          <Typography>{sunset}</Typography>
          <Typography color='grey' fontSize="10px">{timeUntilSunset}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default SunriseSunsetDisplay;
