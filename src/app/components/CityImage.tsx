import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function CityImage() {
  const { current } = useSelector((state: RootState) => state.weather);

  const { name, city, country } = current.location;

  return (
    <Box
      position="relative"
      sx={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Image
        src={current.cityImage}
        width={250}
        height={120}
        alt="image"
        style={{
          borderRadius: '25px',
        }}
      />
      <Typography
        fontSize="10px"
        fontWeight={500}
        color="#FFF"
        sx={{
          position: 'absolute',
          top: '50%',
        }}
      >
        {name}, {city}, {country}
      </Typography>
    </Box>
  );
}

export default CityImage;
