import React from 'react';

export default ({ viewIndex, consumed, goal, onClickGoal, onClickFoods }) => (
  <div className="overview">
    <div onClick={onClickGoal}>
      <p className="overview-subtitle">Target Goal:</p>
      <p className="overview-subtitle">{`${goal} kCal`}</p>
    </div>
    <div>
      <p className="overview-subtitle">Consumed:</p>
      <p className="overview-subtitle">{`${consumed} kCal`}</p>
    </div>
  </div>
);
