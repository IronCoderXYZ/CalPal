// NPM Imports
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import React, { Component } from 'react';
// Local Imports
import * as actions from '../actions';
import Add from '../components/Add';
import Overview from '../components/Overview';
import UpdateGoals from '../components/UpdateGoals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      newGoal: 0,
      showUpdateGoal: false
    };
    this.addCalories = this.addCalories.bind(this);
    this.onClickGoal = this.onClickGoal.bind(this);
    this.onGoalsSave = this.onGoalsSave.bind(this);
    this.onGoalsUpdate = this.onGoalsUpdate.bind(this);
    this.onGoalsCancel = this.onGoalsCancel.bind(this);
    this.subtractCalories = this.subtractCalories.bind(this);
  }

  componentWillMount() {
    this.setState({ newGoal: this.props.user.calorieGoal });
  }

  onGoalsCancel() {
    this.setState({ showUpdateGoal: false });
  }

  onGoalsSave() {
    this.props.dispatch({
      type: actions.UPDATE_GOAL,
      payload: this.state.newGoal
    });
    this.setState({
      showUpdateGoal: false
    });
  }

  onGoalsUpdate({ target }) {
    this.setState({ newGoal: target.value });
  }

  onClickGoal() {
    this.setState(({ showUpdateGoal }) => {
      return { showUpdateGoal: !showUpdateGoal };
    });
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

  renderContent() {
    switch (this.state.showUpdateGoal) {
      default:
        return (
          <Add
            {...this.state}
            addCalories={this.addCalories}
            subtractCalories={this.subtractCalories}
          />
        );
      case true:
        return (
          <UpdateGoals
            onSave={this.onGoalsSave}
            onCancel={this.onGoalsCancel}
            goal={this.state.newGoal}
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
          goal={this.props.user.calorieGoal}
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
