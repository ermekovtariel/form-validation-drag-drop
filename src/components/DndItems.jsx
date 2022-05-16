import { Button, Card, CardActions } from '@mui/material';
import React, { useState } from 'react';

function DndItems({ data, setDndData, remove }) {
  const [currentCardState, setCurrentCard] = useState({});

  function dragStartHandler(e, card) {
    console.log('start', card);
    setCurrentCard(card);
  }
  function dragEndHandler(e) {
    e.target.style.background = '#fff';
  }
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }
  function dragDropHandler(e, carrentCard) {
    e.preventDefault();
    console.log('drop', carrentCard);
    setDndData(
      data.map((card) => {
        if (card.id === carrentCard.id) {
          return {
            ...card,
            id: currentCardState.id,
            name: currentCardState.name,
          };
        }
        if (card.id === currentCardState.id) {
          return { ...card, id: carrentCard.id, name: carrentCard.name };
        }

        return card;
      })
    );
    e.target.style.background = '#fff';
  }

  return (
    <div>
      {data[0] !== undefined &&
        data.map((item, idx) => (
          <Card
            draggable
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dragDropHandler(e, item)}
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

export default DndItems;
