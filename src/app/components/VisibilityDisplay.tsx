import { Box, Typography } from '@mui/material';
import React from 'react';

type VisibilityDisplayProps = {
  visibility: number;
};

const VisibilityDisplay = ({ visibility }: VisibilityDisplayProps) => {
  const getVisibilityStatus = () => {
    if (visibility < 2) {
      return { icon: '🌫️', text: 'Poor' };
    } else if (visibility >= 2 && visibility <= 5) {
      return { icon: '😐', text: 'Average' };
    } else {
      return { icon: '☀️', text: 'Good' };
    }
  };

  const { icon, text } = getVisibilityStatus();

  return (
    <>
      <Box gap="3px" sx={{ alignItems: 'baseline', display: 'flex' }}>
        <Typography variant="h3">{visibility}</Typography>
        <Typography>km</Typography>
      </Box>
      <span className="visibility-text">
        {text} {icon}
      </span>
    </>
  );
};

export default VisibilityDisplay;
