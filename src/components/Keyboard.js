import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './keyboard.css';

const renderRow = (numbers, onChange) => {
  return numbers.map((number, i) => (
    <td key={i} className={number == null ? 'invisible' : ''}>
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
        <tr>{renderRow([7, 8, 9], onChange)}</tr>
        <tr>{renderRow([4, 5, 6], onChange)}</tr>
        <tr>{renderRow([1, 2, 3], onChange)}</tr>
        <tr>{renderRow([null, 0, '<'], onChange)}</tr>
      </tbody>
    </table>
  );
};

export default Keyboard;
