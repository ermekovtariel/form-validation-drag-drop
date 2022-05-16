import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import './Radio.scss';

function RadioComponent({ setRadioData }) {
  return (
    <>
      <FormControl>
        <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          defaultValue='male'
          onChange={(_, data) => setRadioData(data)}
          name='demo-row-radio-buttons-group-label'
        >
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RadioComponent;
