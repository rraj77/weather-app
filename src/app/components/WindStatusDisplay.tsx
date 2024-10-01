import { LocationOn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

type WindStatusDisplayProps = {
  windkph: number;
  winddir: number;
};

function WindStatusDisplay({ windkph, winddir }: WindStatusDisplayProps) {
  return (
    <>
      <Box gap="3px" sx={{ alignItems: 'baseline', display: 'flex' }}>
        <Typography variant="h3">{windkph}</Typography>
        <Typography> km/h</Typography>
      </Box>

      <Box gap="8px" sx={{ alignItems: 'baseline', display: 'flex' }}>
        <Box
          sx={{
            borderRadius: '100%',
            height: '30px',
            width: '30px',
            border: '0.5px solid #ebe8e1',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <LocationOn
            sx={{ fontSize: '15px', rotate: '30deg 0 0' }}
            color="primary"
          />
        </Box>
        <Typography>{winddir}</Typography>
      </Box>
    </>
  );
}

export default WindStatusDisplay;
