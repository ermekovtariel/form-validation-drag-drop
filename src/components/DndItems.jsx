import React, { useState } from 'react';
import { Button, Card, CardActions, TextField } from '@mui/material';
import { dragEndHandler, dragOverHandler } from '../configs';
import './DndItems.scss';

function DndItems({ data, setDndData, remove, setDropData, register, errors }) {
  const [currentCardState, setCurrentCard] = useState({});

  function dragStartHandler(e, card) {
    setCurrentCard(card);

    setDropData({
      id: card.id,
      title: card.title,
    });
  }

  function dragDropHandler(e, carrentCard) {
    e.preventDefault();

    setDndData(
      data.map((card) => {
        if (card.id === carrentCard.id) {
          return {
            ...card,
            id: currentCardState.id,
            title: currentCardState.title,
          };
        }
        if (card.id === currentCardState.id) {
          return { ...card, id: carrentCard.id, title: carrentCard.title };
        }

        return card;
      })
    );
    e.target.style.background = '#fff';
  }

  return (
    <div className='dnd_items_box'>
      {data[0] !== undefined &&
        data.map((item, idx) => (
          <Card
            className='dnd_item'
            draggable
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={dragEndHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={(e) => dragDropHandler(e, item)}
            key={`${item}_${idx}`}
          >
            <div>
              <TextField
                error={errors[`${item.title}_${idx}`]}
                label={`${item.title}`}
                {...register(`${item.title}_${idx}`, {
                  required: true,
                })}
                defaultValue=''
                variant='standard'
              />
            </div>
            <CardActions>
              <Button
                size='small'
                onClick={() => remove(idx, data, setDndData)}
              >
                delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
}

export default DndItems;
