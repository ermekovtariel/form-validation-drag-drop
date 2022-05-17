import React from 'react';
import { TextField } from '@mui/material';

function Name({ errors, register, value, setValue }) {
  const handleChange = (e) => {
    setValue({ ...value, name: e.target.value });
  };

  return (
    <>
      <TextField
        error={errors.name}
        label='Name'
        value={value.name}
        onChangeCapture={handleChange}
        {...register('name', { minLength: 3, required: true })}
        helperText={`${errors.name ? 'Should be more then 3 characters' : ''}`}
        variant='standard'
      />
    </>
  );
}

export default Name;
