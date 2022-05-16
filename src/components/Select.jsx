import React from 'react';
import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import './Select.scss';

function Select({ errors, register }) {
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          fullWidth
          error={errors.age}
          {...register('age', { required: true })}
        >
          <InputLabel variant='standard' htmlFor='uncontrolled-native'>
            Age
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </>
  );
}

export default Select;
