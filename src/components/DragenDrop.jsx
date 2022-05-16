import React from 'react';
import { Button, TextField } from '@mui/material';
import './DragenDrop.scss';

function DragenDrop({ data, setData }) {
  const [text, setText] = React.useState('');

  function addHandler() {
    const id = data.length;
    setData(...data, [
      ...data[0],
      {
        ...data.items,
        items: text,
      },
    ]);
  }

  return (
    <div className='some_thing'>
      <TextField
        error={data[0] === undefined ? true : false}
        label='Some thing'
        value={`${text}`}
        onChange={(e) => setText(e.target.value)}
        variant='standard'
      />
      <Button onClick={addHandler} variant='contained'>
        Add
      </Button>
    </div>
  );
}

export default DragenDrop;
