import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({menuItems, value, setValue, label}) => {

  const handleChange = (event) => {
    setValue(event, label);
  };

  return (
    <Box sx={{ width: '30vh', margin: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {menuItems?.map(({name}) => <MenuItem value={name}>{name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;