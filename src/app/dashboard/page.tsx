'use client';

import { useEffect, useState } from 'react';
import { setWeatherData } from '../store/weatherSlice';
import { fetchCityImage, fetchWeather } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, Grid2, Paper, Stack, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Image from 'next/image';
import { RootState } from '../store/store';
import Highlights from '../components/Highlights';
import Header from '../components/Header';
import CityImage from '../components/CityImage';
import CircularProgress from '@mui/material/CircularProgress';

const formatDate = (date: Date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[date.getDay()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return { day, time: `${hours}: ${minutes}` };
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { current, unit } = useSelector((state: RootState) => state.weather);

  const [search, setSearch] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        setLoading(true);
        const { latitude, longitude } = position.coords;
        const defaultCity = `${latitude},${longitude}`;
        const weatherData = await fetchWeather(search ? search : defaultCity);

        const cityImage = await fetchCityImage(weatherData.location.name);
        dispatch(
          setWeatherData({
            forecast: weatherData.forecast.forecastday,
            current: {
              icon: weatherData.current.condition.icon,
              temp_c: weatherData.current.temp_c,
              temp_f: weatherData.current.temp_f,
              cityImage: cityImage,
              uv: weatherData.current.uv,
              wind_kph: weatherData.current.wind_kph,
              wind_dir: weatherData.current.wind_dir,
              humidity: weatherData.current.humidity,
              vis_km: weatherData.current.vis_km,
              weatherCondition:
                weatherData.forecast.forecastday[0].day.condition.text,
              rainChance:
                weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
              location: {
                country: weatherData.location.country,
                city: weatherData.location.region,
                name: weatherData.location.name,
              },
            },
            unit: 'c',
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  }, [dispatch, search]);

  const { day, time } = formatDate(new Date());

  return (
    <Box
      sx={{
        background: '#d7dbdb',
        minHeight: '100vh',
        padding: '4rem',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size="3rem" />
        </Box>
      ) : (
        <Paper elevation={0} sx={{ borderRadius: '25px' }}>
          <Grid2 container columns={16}>
            {current.icon && (
              <Grid2 size={4.5} sx={{ padding: '3rem' }}>
                <SearchBar setSearch={setSearch} />

                <Box textAlign="center" mt={4} mb={3}>
                  <Image
                    src={`http:${current.icon}`}
                    width={250}
                    height={250}
                    alt="image"
                  />
                </Box>

                <Box display="flex" mb={1.5}>
                  <Typography variant="h1" fontWeight={400}>
                    {unit === 'c' ? current.temp_c : current.temp_f}
                  </Typography>
                  <Typography variant="h3">
                    {unit === 'c' ? '°C' : '°F'}
                  </Typography>
                </Box>

                <Stack gap={3}>
                  <Box display="flex" gap="5px">
                    <Typography>{day},</Typography>
                    <Typography color="grey">{time}</Typography>
                  </Box>

                  <Divider />
                  <Box display="flex" alignItems="center" gap="10px">
                    <Image
                      src={`http:${current.icon}`}
                      width={30}
                      height={30}
                      alt={current.weatherCondition}
                    />
                    <Typography fontSize="12px">
                      {current.weatherCondition}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="10px" mb={2}>
                    <Image
                      src={`http:${current.icon}`}
                      width={30}
                      height={30}
                      alt={current.weatherCondition}
                    />
                    <Typography fontSize="12px">
                      Rain - {current.rainChance}%
                    </Typography>
                  </Box>
                  <CityImage />
                </Stack>
              </Grid2>
            )}
            <Grid2
              size={11.5}
              sx={{
                padding: '3rem',
                background: '#f5f4eb',
                borderRadius: '0 25px 25px 0',
              }}
            >
              <Stack gap={8}>
                <Header />

                <Stack gap={5}>
                  <WeatherCard />

                  <Highlights />
                </Stack>
              </Stack>
            </Grid2>
          </Grid2>
        </Paper>
      )}
    </Box>
  );
}
