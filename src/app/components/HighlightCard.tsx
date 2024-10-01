import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import HumidityDisplay from './HumidityDisplay';
import VisibilityDisplay from './VisibilityDisplay';
import AirQualityDisplay from './AirQualityDisplay';
import HighlightCardTitleContainer from './HighlightCardTitleContainer';
import WindStatusDisplay from './WindStatusDisplay';
import SunriseSunsetDisplay from './SunriseSunsetDisplay';
import UVIndexDisplay from './UVIndexDisplay';

const HighlightCard = ({ title }: { title: string }) => {
  const { current, forecast } = useSelector(
    (state: RootState) => state.weather
  );

  const getContent = () => {
    if (!forecast.length) return null;

    switch (title) {
      case 'UV Index':
        return <UVIndexDisplay uvIndex={current.uv} />;

      case 'Wind Status':
        return (
          <WindStatusDisplay
            windkph={current.wind_kph}
            winddir={current.wind_dir}
          />
        );

      case 'Sunrice & Sunset':
        return (
          <SunriseSunsetDisplay
            sunset={forecast[0].astro.sunset}
            sunrise={forecast[0].astro.sunrise}
          />
        );

      case 'Humidity':
        return <HumidityDisplay humidity={current.humidity} />;

      case 'Visibility':
        return <VisibilityDisplay visibility={current.vis_km} />;

      case 'Air Quality':
        return <AirQualityDisplay airQualityIndex={105} />;

      default:
        return null;
    }
  };

  return (
    <HighlightCardTitleContainer title={title}>
      {getContent()}
    </HighlightCardTitleContainer>
  );
};

export default HighlightCard;
