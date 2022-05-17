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
  DragenDrop,
  DndItems,
  DatePickerComponent,
} from './components';
import './App.scss';
import { Button } from '@mui/material';

import { onSubmitFunc, removeFunc } from './configs';

export default function App() {
  const [clear, setClear] = useState(false);
  const [state, setState] = useState({
    gilad: true,
    jason: true,
    antoine: false,
  });
  const [dropData, setDropData] = useState({});
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length < 2;
  const [dndData, setDndData] = useState([]);
  const [date, setDate] = useState();
  const [value, setValue] = React.useState({
    name: '',
    email: '',
    select: 10,
    area: '',
    password: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [radioData, setRadioData] = useState('male');

  useEffect(() => {
    setDndData(dndData);
  }, [dndData, setDndData]);

  useEffect(() => {
    setValue({
      ...value,
      name: '',
      email: '',
      select: 10,
      area: '',
      password: '',
    });
    setDndData([]);
    setState({
      gilad: false,
      jason: false,
      antoine: false,
    });
  }, [clear]);

  const onSubmit = (data) => {
    onSubmitFunc({
      data,
      error,
      state,
      date,
      dndData,
      radioData,
      dropData,
      clear,
      setClear,
    });
  };

  function remove(i, dndData, setDndData) {
    removeFunc(i, dndData, setDndData);
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container_1'>
          <Name
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />
          <Email
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />
          <DatePickerComponent value={date} setValue={setDate} />
          <Select
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />
          <Checkboxes error={error} state={state} setState={setState} />
          <TextArea
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />
          <Radio setRadioData={setRadioData} />
          <Password
            setValue={setValue}
            value={value}
            register={register}
            errors={errors}
          />

          <DndItems
            register={register}
            data={dndData}
            dropData={dropData}
            setDndData={setDndData}
            remove={remove}
            setDropData={setDropData}
            errors={errors}
          />

          <DragenDrop
            setValue={setValue}
            value={value}
            errors={errors}
            data={dndData}
            clear={clear}
            setData={setDndData}
          />
        </div>

        <Button variant='contained' type='submit'>
          Submit Button
        </Button>
      </form>
    </div>
  );
}
