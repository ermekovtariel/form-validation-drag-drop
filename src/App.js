import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Select,
  Checkboxes,
  Password,
  Radio,
  Name,
  TextArea,
  Email,
} from './components';
import './App.scss';
import { Button } from '@mui/material';
import DragenDrop from './components/DragenDrop';
import DndItems from './components/DndItems';
import DatePickerComponent from './components/DatePickerComponent';
import DragNDrop from './cc/DragNDrop';

export default function App() {
  const [dndData, setDndData] = useState([
    {
      title: 'group 1',
      items: [
        { id: 1, title: '1' },
        { id: 2, title: '2' },
        { id: 3, title: '3' },
      ],
    },
    {
      title: 'group 2',
      items: [
        { id: 4, title: '4' },
        { id: 5, title: '5' },
      ],
    },
  ]);
  console.log(dndData);

  const [date, setDate] = useState(new Date('2022-05-16'));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [radioData, setRadioData] = useState('male');
  const [state, setState] = useState({
    gilad: true,
    jason: true,
    antoine: false,
  });

  useEffect(() => {
    setDndData(dndData);
  }, [dndData]);

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length < 2;

  const onSubmit = (data) => {
    if (!error) {
      if (dndData[0]) {
        console.log(state);
        data.date_picker = date;
        data.checkbox = state;
        data.dndData = dndData;
        data.radio = radioData;
        console.log(data);
      }
    }
  };

  function remove(i) {
    dndData.splice(i, 1);
    setDndData([...dndData]);
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container_1'>
          <Name register={register} errors={errors} />
          <Email register={register} errors={errors} />
          <DatePickerComponent value={date} setValue={setDate} />
          <Select register={register} errors={errors} />
          <Checkboxes error={error} state={state} setState={setState} />
          <TextArea register={register} errors={errors} />
          <Radio setRadioData={setRadioData} />
          <Password register={register} errors={errors} />
          <DragenDrop errors={errors} data={dndData} setData={setDndData} />
        </div>
        <div className='container_2'>
          <DragNDrop data={dndData} />
          {/* <DndItems data={dndData} setDndData={setDndData} remove={remove} /> */}
        </div>
        <Button variant='contained' type='submit'>
          Submit Button
        </Button>
      </form>
    </div>
  );
}
