export default function addHandler(data, setData, text) {
  const id = data.length;
  data[0].items.push({ id, title: text });
  setData(data);
}

export const onSubmitFunc = ({
  data,
  error,
  state,
  date,
  radioData,
  collected,
  clear,
  setClear,
}) => {
  if (!error) {
    data.date_picker = date;
    data.collected = collected;
    data.checkbox = state;
    data.radio = radioData;
    alert('Data in processing');
    data = {};
    console.log(data);
    setClear(!clear);
  }
};

export const removeFunc = (i, dndData, setDndData) => {
  dndData.splice(i, 1);
  setDndData([...dndData]);
};

export function dragEndHandler(e) {
  e.target.style.background = '#fff';
}

export function dragOverHandler(e) {
  e.preventDefault();
  e.target.style.background = 'lightgray';
}
