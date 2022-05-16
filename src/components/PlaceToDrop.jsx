import React from 'react';
import { Button, Card, CardActions } from '@mui/material';

function PlaceToDrop({
  setChangePlace,
  place,
  dragDropHandler,
  data,
  remove,
  currentCardState,
  setCurrentCard,
}) {
  const dragStartHandler = (e, card) => {
    console.log('start=>', place, card);
    setCurrentCard(card);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = '#fff';
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  };

  return (
    <div
      style={{
        background: '#000',
        color: '#fff',
        display: 'grid',
        alignContent: 'center',
      }}
    >
      <span>Place To Drop</span>
      {data.second !== undefined &&
        data.second.map((item, idx) => (
          <Card
            draggable
            onDragEnter={() => setChangePlace('second')}
            onDrop={(e) => dragDropHandler(e, item, currentCardState, place)}
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            key={`${item}_${idx}`}
          >
            <div>{item?.name}</div>
            <CardActions>
              <Button size='small' onClick={() => remove(idx)}>
                delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
}

export default PlaceToDrop;
