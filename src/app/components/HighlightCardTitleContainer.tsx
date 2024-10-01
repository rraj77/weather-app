import { Card, CardContent, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type HighlightCardTitleContainerProps = {
  title: string;
  children: ReactNode;
};

function HighlightCardTitleContainer({
  title,
  children,
}: HighlightCardTitleContainerProps) {
  return (
    <Card
      sx={{
        borderRadius: '20px',
        width: '100%',
        padding: '0.5rem',
      }}
      elevation={0}
    >
      <CardContent>
        <Stack gap={3}>
          <Typography color="grey">{title}</Typography>

          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default HighlightCardTitleContainer;
