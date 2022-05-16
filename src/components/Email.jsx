import { TextField } from '@mui/material';
import React from 'react';

function Email({ errors, register }) {
  return (
    <>
      <TextField
        error={errors.email}
        label='Email'
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
