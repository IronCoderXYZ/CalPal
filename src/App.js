// NPM Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Alert,
  Button,
  CardText,
  CardBody,
  CardTitle,
  Container,
  CardSubtitle,
  Table
} from 'reactstrap';
// Local Imports
import './App.css';
import Add from './components/Add';
import Foods from './components/Foods';
import Overview from './components/Overview';
import UpdateGoals from './components/UpdateGoals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      goal: 2250,
      newGoal: 0,
      consumed: 0,
      showUpdateGoal: false
    };
    this.addCalories = this.addCalories.bind(this);
    this.onClickGoal = this.onClickGoal.bind(this);
    this.onGoalsSave = this.onGoalsSave.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onGoalsUpdate = this.onGoalsUpdate.bind(this);
    this.onGoalsCancel = this.onGoalsCancel.bind(this);
    this.subtractCalories = this.subtractCalories.bind(this);
    this.onChangeKeyboard = this.onChangeKeyboard.bind(this);
  }

  componentWillMount() {
    const goal = localStorage.getItem('goal');
    const lastSessionConsumed = localStorage.getItem('lastConsumed');
    if (goal) {
      this.setState({ goal });
    }
    if (lastSessionConsumed) {
      this.setState({ consumed: Number(lastSessionConsumed) });
    }
  }

  onGoalsCancel() {
    this.setState({ showUpdateGoal: false });
  }

  onGoalsSave() {
    this.setState({ goal: this.state.newGoal, showUpdateGoal: false });
    localStorage.setItem('goal', this.state.newGoal);
  }

  onGoalsUpdate({ target }) {
    this.setState({ newGoal: target.value });
  }

  onClickGoal() {
    this.setState(({ showUpdateGoal }) => {
      return { showUpdateGoal: !showUpdateGoal };
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
    if (number === '<')
      return this.setState({ input: this.state.input.slice(0, -1) });
    if (input === 0) {
      return this.setState({ input: numberString });
    }
    this.setState({ input: (this.state.input += numberString) });
  };

  renderContent() {
    switch (this.state.showUpdateGoal) {
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
      case true:
        return (
          <UpdateGoals
            {...this.state}
            onSave={this.onGoalsSave}
            onCancel={this.onGoalsCancel}
            onInputChange={this.onGoalsUpdate}
          />
        );
    }
  }

  render() {
    return (
      <Container className="">
        <Overview
          {...this.state}
          onClickGoal={this.onClickGoal}
          onClickFoods={this.onClickFoods}
        />
        {this.renderContent()}
      </Container>
    );
  }
}

export default App;
