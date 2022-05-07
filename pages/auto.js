import React, { useState } from 'react';

const Auto = () => {
  const names = [
    'Adam',
    'Allen',
    'Bobby',
    'Dan',
    'Elbert',
    'Frosty',
    'Jordan',
    'Miller',
  ];
  let suggestion = [];
  const [value, setValue] = useState();
  const [list, setList] = useState();
  const setInputValue = (e, x) => {
    setValue(x);
  };

  const autoComplete = (e) => {
    setValue(e.target.value);
    names.forEach((x) => {
      if (
        x.substr(0, e.target.value.length).toUpperCase() ===
        e.target.value.toUpperCase()
      ) {
        suggestion.push(x);
      }
    });
    setList(
      suggestion.map((x, index) => {
        return (
          <p key={index} onClick={(e) => setInputValue(e, x)}>
            {x}
          </p>
        );
      })
    );
    if (e.target.value.length === 0) {
      setList('');
    }
  };

  return (
    <div>
      <h1>AutoComplete</h1>
      <input type='text' onChange={(e) => autoComplete(e)} value={value} />
      <div>{list}</div>
    </div>
  );
};

export default Auto;
