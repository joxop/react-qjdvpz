import { Input, Form } from 'antd';
import React, { useState } from 'react';

function Crud({ onSubmitUserdata }) {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [inputList, setInputList] = useState([]);

  const getData = (event) => {
    event.preventDefault();
  };

  const Box = () => {
    return <div> {`-${data}`} </div>;
  };

  const storeData = (event) => {
    event.preventDefault();
    setList(list.concat(<Box />));
  };

  const onAddBtnClick = () => {
    setInputList(inputList.concat(<Box />));
  };

  return (
    <div>
      <form onSubmit={getData}>
        <div>
          <Input
            type="text"
            id="userData"
            placeholder="please enter a memo"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Input type="submit" value="Submit" onClick={onAddBtnClick} />
        </div>
      </form>
      <div>{inputList}</div>
    </div>
  );
}

export default Crud;
