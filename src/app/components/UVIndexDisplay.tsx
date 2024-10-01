import { Box, Typography } from '@mui/material';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

type UVIndexDisplayProps = {
  uvIndex: number;
};

const CustomTick = ({ x, y, payload }) => (
  <text x={x} y={y} fill="#666" fontSize={10} textAnchor="middle">
    {payload.value}
  </text>
);

function UVIndexDisplay({ uvIndex }: UVIndexDisplayProps) {
  const uvIndexData = [
    {
      name: 'UV Index',
      value: uvIndex || 0,
      fill: '#FFB800',
    },
  ];

  return (
    <Box sx={{ position: 'relative', height: '100px', marginLeft: '-3px' }}>
      <RadialBarChart
        width={200}
        height={200}
        innerRadius="70%"
        outerRadius="100%"
        data={uvIndexData}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 12]}
          tick={CustomTick}
          ticks={[0, 3, 6, 9, 12]}
          tickSize={-5}
        />
        <RadialBar min={15}fill='#dsfds' background  dataKey="value" />
      </RadialBarChart>

      <Typography
        variant="h4"
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
        }}
      >
        {uvIndex}
      </Typography>
    </Box>
  );
}

export default UVIndexDisplay;
