// NPM Imports
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import React, { Component } from 'react';
// Local Imports
import * as actions from '../actions';
import Add from '../components/add';
import Overview from '../components/overview';
import UpdateGoals from '../components/updateGoals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      goal: 2250,
      newGoal: 0,
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
    if (goal) {
      this.setState({ goal });
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
    const { consumedCalories } = this.props.user;
    let newCalories = consumedCalories - calories;
    this.props.dispatch({
      type: actions.UPDATE_CALORIES,
      payload: newCalories
    });
    this.setState({ input: 0 });
  }

  addCalories(calories) {
    const { consumedCalories } = this.props.user;
    let newCalories = consumedCalories + calories;
    this.props.dispatch({
      type: actions.UPDATE_CALORIES,
      payload: newCalories
    });
    this.setState({ input: 0 });
  }

  onChangeKeyboard = number => {
    const { input } = this.state;
    let newInput = input;
    const numberString = String(number);
    if (number === '<')
      return this.setState({ input: this.state.input.slice(0, -1) });
    if (input === 0) {
      return this.setState({ input: numberString });
    }
    this.setState({ input: (newInput += numberString) });
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
      <Container>
        <Overview
          onClickGoal={this.onClickGoal}
          onClickFoods={this.onClickFoods}
          consumed={this.props.user.consumedCalories}
        />
        {this.renderContent()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth };
};

export default connect(mapStateToProps)(App);
