import { Box, Grid2, Stack, Typography } from '@mui/material';
import HighlightCard from './HighlightCard';

function Highlights() {
  return (
    <Stack gap={3}>
      <Typography variant="h6">Today's Highlights</Typography>

      <Stack gap={2}>
        <Stack direction="row" spacing={2.5}>
          <HighlightCard title="UV Index" />

          <HighlightCard title="Wind Status" />

          <HighlightCard title="Sunrice & Sunset" />
        </Stack>

        <Stack direction="row" spacing={2.5}>
          <HighlightCard title="Humidity" />

          <HighlightCard title="Visibility" />

          <HighlightCard title="Air Quality" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Highlights;
