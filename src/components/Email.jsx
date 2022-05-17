import React from 'react';
import { TextField } from '@mui/material';

function Email({ errors, register, value, setValue }) {
  const handleChange = (e) => {
    setValue({ ...value, email: e.target.value });
  };
  return (
    <>
      <TextField
        error={errors.email}
        label='Email'
        value={value.email}
        onChangeCapture={handleChange}
        defaultValue=''
        {...register('email', {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
          },
        })}
        helperText={`${errors.email ? 'Type email' : ''}`}
        variant='standard'
      />
    </>
  );
}

export default Email;
