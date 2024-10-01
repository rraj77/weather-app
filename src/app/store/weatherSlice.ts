import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  forecast: {
    date: string;
    astro: {
      sunrise: string;
      sunset: string;
    };
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      maxtemp_f: number;
      mintemp_f: number;
      condition: {
        icon: string;
      };
    };
  }[];
  current: {
    icon: string;
    temp_c: number;
    temp_f: number;
    cityImage: string;
    uv: number;
    wind_kph: number;
    wind_dir: number;
    humidity: number;
    vis_km: number;
    weatherCondition: string;
    rainChance: number;
    location: {
      country: string;
      city: string;
      name: string;
    };
  };
  unit: string;
}

const initialState: WeatherState = {
  forecast: [],
  current: {
    icon: '',
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    wind_kph: 0,
    wind_dir: 0,
    humidity: 0,
    vis_km: 0,
    cityImage: '',
    weatherCondition: '',
    rainChance: 0,
    location: {
      country: '',
      city: '',
      name: '',
    },
  },
  unit: 'c',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(state, action: PayloadAction<WeatherState>) {
      return { ...state, ...action.payload };
    },
    toggleUnit(state) {
      state.unit = state.unit === 'c' ? 'f' : 'c';
    },
  },
});

export const { setWeatherData, toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
