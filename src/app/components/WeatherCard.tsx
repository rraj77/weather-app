import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Image from 'next/image';

const WeatherCard = () => {
  const { forecast, unit } = useSelector((state: RootState) => state.weather);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Stack flexDirection='row' flexWrap='wrap' gap={1}>
      {forecast.map((data, index) => {
        return (
          <Card
            key={index}
            sx={{
              borderRadius: '20px',
              // width: '100%',
              justifyContent: 'center',
            }}
            elevation={0}
          >
            <CardContent>
              <Typography textAlign="center">
                {daysOfWeek[new Date(data.date as unknown as string).getDay()]}
              </Typography>

              <Box textAlign="center">
                <Image
                  src={`http:${data.day.condition.icon}`}
                  width={50}
                  height={50}
                  alt="image"
                />
              </Box>

              <Typography textAlign="center" fontSize="10px">
                {unit === 'c'
                  ? `${Math.floor(data.day.maxtemp_c)}°`
                  : `${Math.floor(data.day.maxtemp_f)}°`}

                <span style={{ color: 'grey', paddingLeft: '3px' }}>
                  {unit === 'c'
                    ? `${Math.floor(data.day.mintemp_c)}° `
                    : `${Math.floor(data.day.maxtemp_f)}°`}
                </span>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default WeatherCard;
