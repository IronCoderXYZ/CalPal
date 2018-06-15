import React, { Fragment } from 'react';
import Keyboard from './Keyboard';

export default ({
  input,
  onInputChange,
  subtractCalories,
  addCalories,
  onChangeKeyboard
}) => (
  <Fragment>
    <p className="overview-title">Add Calories</p>
    <input disabled type="number" value={input} onChange={onInputChange} />
    <br />
    <Keyboard onChange={number => onChangeKeyboard(number)} />
    <i
      className="fa fa-minus fa-4x"
      onClick={() => subtractCalories(Number(input))}
    />
    <i
      className="fa fa-plus fa-4x"
      onClick={() => addCalories(Number(input))}
    />
  </Fragment>
);
