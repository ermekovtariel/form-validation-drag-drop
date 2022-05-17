import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import './DragenDrop.scss';

function DragenDrop({ data, setData, setValue, value, clear }) {
  const [text, setText] = React.useState('');

  function addHandler() {
    const id = data.length;
    setData([...data, { id, title: text }]);
  }

  useEffect(() => {
    setText('');
  }, [clear]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='some_thing'>
      <TextField
        error={data[0] === undefined ? true : false}
        label='Some thing'
        value={text}
        onChange={handleChange}
        variant='standard'
      />
      <Button onClick={addHandler} variant='contained'>
        Add
      </Button>
    </div>
  );
}

export default DragenDrop;
