import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Input, InputAdornment } from '@mui/material';

function Password({ register, errors }) {
  const [passwordChanged, setPasswordChanged] = React.useState(false);

  const handleClickShowPassword = () => {
    setPasswordChanged(!passwordChanged);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Input
        error={errors.password}
        id='standard-adornment-password'
        type={passwordChanged ? 'text' : 'password'}
        {...register('password', {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*\d)[a-zA-Z\d@$!%*#?&]{4,}$/i,
        })}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {passwordChanged ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}

export default Password;
