import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { City } from 'country-state-city';

type SearchBarProps = {
  setSearch: (search: string) => void;
};

function SearchBar({ setSearch }: SearchBarProps) {
  const [cities, setCities] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const allCities = City.getCitiesOfCountry('IN');

    if (allCities) {
      setCities(allCities.map((data) => ({ name: data.name })));
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '2px',
      }}
    >
      <SearchIcon
        sx={{ color: 'black', marginRight: '8px', fontSize: '20px' }}
      />

      <Autocomplete
        freeSolo
        options={cities.map((city) => city.name)}
        onChange={(event, newInputValue) => setSearch(newInputValue || '')}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Search for places ..."
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
            }}
            sx={{
              flex: 1,
              input: {
                padding: '5px 0',
                fontSize: '12px',
                fontWeight: 500,
                color: 'black !important',
              },
            }}
          />
        )}
        sx={{
          flex: 1,
        }}
      />

      <IconButton
        sx={{
          marginLeft: '20px',
          backgroundColor: '#f7f5f5',
        }}
        size="small"
      >
        <LocationSearchingIcon sx={{ fontSize: '16px' }} />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
