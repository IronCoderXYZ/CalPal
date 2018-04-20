import React from 'react';
import './keyboard.css';

const renderRow = (numbers, onChange) => {
  return numbers.map(number => (
    <td>
      <div onClick={() => onChange(number)} className="border-cell">
        {number}
      </div>
    </td>
  ));
};

const Keyboard = ({ onChange }) => {
  return (
    <table>
      <tr>{renderRow([1, 2, 3], onChange)}</tr>
      <tr>{renderRow([4, 5, 6], onChange)}</tr>
      <tr>{renderRow([9, 8, 9], onChange)}</tr>
      <tr>{renderRow(['x', 0, 'x'], onChange)}</tr>
    </table>
  );
};

export default Keyboard;
