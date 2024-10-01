import React, { useState } from 'react';
import { Stack, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { toggleUnit } from '../store/weatherSlice';

const IconButtonStyled = styled(IconButton)(() => ({
  borderRadius: '50%',
  background: '#fff',
  fontSize: '15px',
  width: '35px',
  height: '35px',
  fontWeight: 600,
  color: '#000',
}));

function UnitToggle() {
  const [unitTab, setUnitTab] = useState('C'); // Default to Celsius
  const dispatch = useDispatch();

  const handleChange = (newUnit: string) => {
    setUnitTab(newUnit);
    dispatch(toggleUnit());
  };

  return (
    <Stack
      direction="row"
      gap="15px"
      justifyContent="center"
      alignItems="center"
    >
      <IconButtonStyled
        onClick={() => handleChange('C')}
        size="small"
        sx={{
          ...(unitTab === 'C' && {
            color: '#fff',
            backgroundColor: '#000',
          }),
        }}
      >
        °C
      </IconButtonStyled>

      <IconButtonStyled
        onClick={() => handleChange('F')}
        size="small"
        sx={{
          ...(unitTab === 'F' && {
            color: '#fff',
            backgroundColor: '#000',
          }),
        }}
      >
        °F
      </IconButtonStyled>
    </Stack>
  );
}

export default UnitToggle;
