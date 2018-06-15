import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './keyboard.css';

const renderRow = (numbers, onChange) => {
  return numbers.map((number, i) => (
    <td key={i}>
      <div onClick={() => onChange(number)} className="border-cell">
        {number}
      </div>
    </td>
  ));
};

const Keyboard = ({ onChange }) => {
  return (
    <table>
      <tbody>
        <tr>{renderRow([1, 2, 3], onChange)}</tr>
        <tr>{renderRow([4, 5, 6], onChange)}</tr>
        <tr>{renderRow([9, 8, 9], onChange)}</tr>
        <tr>{renderRow(['x', 0, 'x'], onChange)}</tr>
      </tbody>
    </table>
  );
};

export default Keyboard;
