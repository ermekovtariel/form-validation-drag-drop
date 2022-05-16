import React from 'react';
import { TextField } from '@mui/material';

function TextArea({ register, errors }) {
  return (
    <>
      <TextField
        id='standard-multiline-static'
        label='Text Area'
        error={errors.text_area}
        multiline
        {...register('text_area', { maxLength: 200, required: true })}
        rows={4}
        variant='standard'
        placeholder='Text...'
      />
    </>
  );
}

export default TextArea;
