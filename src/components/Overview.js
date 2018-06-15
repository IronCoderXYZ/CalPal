import React from 'react';

export default ({ consumed, goal, onClick }) => (
  <div className="overview">
    <div onClick={onClick}>
      <p className="overview-subtitle">Target Goal:</p>
      <p className="overview-subtitle">{`${goal} kCal`}</p>
    </div>
    <div>
      <p className="overview-subtitle">Consumed:</p>
      <p className="overview-subtitle">{`${consumed} kCal`}</p>
    </div>
  </div>
);
