import { Stack, Tab, Tabs, styled, tabClasses } from '@mui/material';
import { useState } from 'react';
import UnitToggle from './UnitToggle';
import Image from 'next/image';

const TabStyled = styled(Tab)(() => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '22px',
  [`&.${tabClasses.selected}`]: {
    color: '#000',
  },
}));

const TabsStyled = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#000',
    left: '100px !important',
    width: '70px !important',
  },
  '& .MuiTab-root': {
    padding: '0px',
  },
}));

function Header() {
  const [tabValue, setTabValue] = useState('week');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <TabsStyled value={tabValue} onChange={handleTabChange}>
        <TabStyled value="today" disabled label="Today" />
        <TabStyled value="week" label="Week" color="#000" />
      </TabsStyled>

      <Stack direction="row" gap="2rem">
        <UnitToggle />
        <Image
          style={{ borderRadius: '10px' }}
          src="/tree.jpg"
          height={45}
          width={45}
          alt="profile-pic"
        />
      </Stack>
    </Stack>
  );
}

export default Header;
