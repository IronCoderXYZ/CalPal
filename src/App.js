import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  state = { consumed: 0, goal: 2250, input: 0 };

  componentWillMount() {
    const lastSessionConsumed = localStorage.getItem('lastConsumed');
    if (lastSessionConsumed) {
      this.setState({ consumed: Number(lastSessionConsumed) });
    }
  }

  subtractCalories(calories) {
    const { consumed } = this.state;
    let totalCalories = consumed - calories;
    this.setState({
      input: 0,
      consumed: totalCalories
    });
    localStorage.setItem('lastConsumed', totalCalories);
  }

  addCalories(calories) {
    const { consumed } = this.state;
    let totalCalories = (calories += consumed);
    this.setState({
      input: 0,
      consumed: totalCalories
    });
    localStorage.setItem('lastConsumed', totalCalories);
  }

  onInputChange({ target }) {
    this.setState({
      input: target.value
    });
  }

  renderOverview() {
    const { consumed, goal } = this.state;

    return (
      <div className="overview">
        <p className="overview-title">Overview</p>
        <p className="overview-subtitle">Daily Goal:</p>
        <p className="overview-subtitle">{`${goal} kCal`}</p>
        <p className="overview-subtitle">Consumed</p>
        <p className="overview-subtitle">{`${consumed} kCal`}</p>
        {this.renderAdd()}
      </div>
    );
  }

  renderAdd() {
    return (
      <div>
        <p className="overview-title">Add Calories</p>
        <input
          value={this.state.input}
          type="number"
          onChange={e => this.onInputChange(e)}
        />
        <br />
        <i
          onClick={() => this.subtractCalories(Number(this.state.input))}
          className="fa fa-minus fa-4x"
        />
        <i
          onClick={() => this.addCalories(Number(this.state.input))}
          className="fa fa-plus fa-4x"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="app-title">CalcPal</h1>
        </header>
        {this.renderOverview()}
      </div>
    );
  }
}

export default App;
