import React from 'react';
import { Box, styled } from '@mui/material';

const CustomProgressBarStyled = styled(Box)(() => ({
  width: '25px',
  border: '1px solid #ebe8e1',
  borderRadius: '20px',
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '4px',
  height: '80px',
  overflow: 'hidden',
}));

type CustomProgressBarProps = {
  progress: number;
};

function CustomProgressBar({ progress }: CustomProgressBarProps) {
  return (
    <CustomProgressBarStyled>
      <Box
        sx={{
          borderRadius: '50%',
          height: '15px',
          width: '15px',
          background: 'blue',
          position: 'absolute',
          bottom: `${(progress * (80 - 20)) / 100}px`,
          transition: 'bottom 0.3s ease',
        }}
      />
    </CustomProgressBarStyled>
  );
}

export default CustomProgressBar;
