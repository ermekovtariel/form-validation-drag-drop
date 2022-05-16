import { TextField } from '@mui/material';
import React from 'react';

function Name({ errors, register }) {
  return (
    <>
      <TextField
        error={errors.name}
        label='Name'
        {...register('name', { minLength: 3, required: true })}
        helperText={`${errors.name ? 'Should be more then 3 characters' : ''}`}
        variant='standard'
      />
    </>
  );
}

export default Name;
