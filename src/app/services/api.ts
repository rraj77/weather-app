import axios from 'axios';

const WEATHER_API_KEY = 'd84613cf0878418eb8460652242709';
const UNSPLASH_ACCESS_KEY = 'aNjPyGx3aFncyQef19eZDlfjp9aIEHTP7pT5IB03sfg';

export const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7`
  );

  console.log(response, 'response')
  return response.data;
};

export const fetchCityImage = async (city: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${UNSPLASH_ACCESS_KEY}`
  );

  return response.data.results[0]?.urls?.regular;
};
