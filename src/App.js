// NPM Imports
import React, { Component } from 'react';
// Local Imports
import './App.css';
import Add from './components/Add';
import Keyboard from './components/Keyboard';
import Overview from './components/Overview';
import UpdateGoals from './components/UpdateGoals';

/*
Index
0 = Keyboard
1 = Update Goals
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      goal: 2250,
      newGoal: 0,
      consumed: 0,
      viewIndex: 0
    };
    this.addCalories = this.addCalories.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.onGoalsSave = this.onGoalsSave.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onGoalsUpdate = this.onGoalsUpdate.bind(this);
    this.subtractCalories = this.subtractCalories.bind(this);
    this.onChangeKeyboard = this.onChangeKeyboard.bind(this);
  }

  componentWillMount() {
    const lastSessionConsumed = localStorage.getItem('lastConsumed');
    if (lastSessionConsumed) {
      this.setState({ consumed: Number(lastSessionConsumed) });
    }
  }

  onGoalsSave() {
    this.setState({ goal: this.state.newGoal, viewIndex: 0 });
  }

  onGoalsUpdate({ target }) {
    this.setState({ newGoal: target.value });
  }

  updateGoals() {
    this.setState(({ viewIndex }) => {
      return { viewIndex: viewIndex === 1 ? 0 : 1 };
    });
  }

  onInputChange({ target }) {
    this.setState({ input: target.value });
  }

  subtractCalories(calories) {
    const { consumed } = this.state;
    let totalCalories = consumed - calories;
    this.setState({ input: 0, consumed: totalCalories });
    localStorage.setItem('lastConsumed', totalCalories);
  }

  addCalories(calories) {
    const { consumed } = this.state;
    let totalCalories = (calories += consumed);
    this.setState({ input: 0, consumed: totalCalories });
    localStorage.setItem('lastConsumed', totalCalories);
  }

  onChangeKeyboard = number => {
    const { input } = this.state;
    const numberString = String(number);
    if (number === 'x')
      return this.setState({ input: this.state.input.slice(0, -1) });
    if (input === 0) {
      return this.setState({ input: numberString });
    }
    this.setState({ input: (this.state.input += numberString) });
  };

  renderContent() {
    switch (this.state.viewIndex) {
      default:
        return (
          <Add
            {...this.state}
            addCalories={this.addCalories}
            onInputChange={this.onInputChange}
            subtractCalories={this.subtractCalories}
            onChangeKeyboard={this.onChangeKeyboard}
          />
        );
      case 1:
        return (
          <UpdateGoals
            {...this.state}
            onSave={this.onGoalsSave}
            onInputChange={this.onGoalsUpdate}
          />
        );
    }
  }

  render() {
    return (
      <div className="app">
        <Overview {...this.state} onClick={this.updateGoals} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
