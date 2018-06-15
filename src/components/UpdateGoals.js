import React, { Fragment } from 'react';

export default ({ newGoal, onInputChange, onSave }) => (
  <Fragment>
    <p className="overview-title">Update Goalss</p>
    <input type="number" value={newGoal} onChange={onInputChange} />
    <br />
    <i className="fa fa-check fa-3x" onClick={onSave} />
  </Fragment>
);
