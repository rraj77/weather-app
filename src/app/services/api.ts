import axios from 'axios';

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7`
  );

  return response.data;
};

export const fetchCityImage = async (city: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${UNSPLASH_ACCESS_KEY}`
  );

  return response.data.results[0]?.urls?.regular;
};
