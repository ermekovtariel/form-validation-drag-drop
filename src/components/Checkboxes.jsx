import React from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';

function Checkboxes({ error, state, setState }) {
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Box>
        <FormControl
          required
          error={error}
          component='fieldset'
          variant='standard'
        >
          <FormGroup
            sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gilad}
                  onChange={handleChange}
                  name='gilad'
                />
              }
              label='gilad'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.jason}
                  onChange={handleChange}
                  name='jason'
                />
              }
              label='jason'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.antoine}
                  onChange={handleChange}
                  name='antoine'
                />
              }
              label='antoine'
            />
          </FormGroup>
          <FormHelperText>Tage 2 checkboxes</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}

export default Checkboxes;
