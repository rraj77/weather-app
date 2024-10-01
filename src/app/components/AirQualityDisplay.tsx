import { Stack, Typography } from '@mui/material';
import CustomProgressBar from './CustomSwitchProgress';

type AirQualityDisplayProps = {
  airQualityIndex: number;
};

const AirQualityDisplay = ({ airQualityIndex }: AirQualityDisplayProps) => {
  const airQualityProgress = Math.floor((airQualityIndex / 300) * 100)

  const getAirQualityStatus = () => {
    if (airQualityIndex <= 50) {
      return { icon: '😇', text: 'Good' };
    } else if (airQualityIndex <= 100) {
      return { icon: '😐', text: 'Moderate' };
    } else if (airQualityIndex <= 150) {
      return { icon: '👎🏻', text: 'Unhealthy' };
    } else {
      return { icon: '💔', text: 'Unhealthy' };
    }
  };

  const { icon, text } = getAirQualityStatus();

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap={4}>
        <Typography fontSize="32px">{airQualityIndex}</Typography>

        <Typography>
          {text} {icon}
        </Typography>
      </Stack>
      <CustomProgressBar progress={airQualityProgress} />
    </Stack>
  );
};

export default AirQualityDisplay;
