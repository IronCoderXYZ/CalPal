// NPM Imports
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
import Styled from 'styled-components';
import React, { Component, Fragment } from 'react';
// Local Imports

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      error: false,
      success: false,
      newFoodName: '',
      newFoodCalories: ''
    };
    this.onSave = this.onSave.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.dismissSuccess = this.dismissSuccess.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
  }

  componentWillMount() {
    const foods = JSON.parse(localStorage.getItem('foods'));
    if (foods) {
      this.setState({ foods });
    }
  }

  onDelete(index) {
    const newFoods = this.state.foods;
    newFoods.splice(index, 1);
    this.setState({ foods: newFoods });
    localStorage.setItem('foods', newFoods);
  }

  onSave() {
    const { foods, newFoodName, newFoodCalories } = this.state;
    if (!newFoodName || !newFoodCalories) {
      return this.setState({ error: true, success: false });
    }
    this.setState({
      error: false,
      success: true,
      newFoodName: '',
      newFoodCalories: '',
      foods: [...foods, { name: newFoodName, calories: newFoodCalories }]
    });
    localStorage.setItem(
      'foods',
      JSON.stringify([
        ...foods,
        { name: newFoodName, calories: newFoodCalories }
      ])
    );
  }

  onChangeName({ target }) {
    this.setState({ newFoodName: target.value });
  }

  onChangeCalories({ target }) {
    this.setState({ newFoodCalories: target.value });
  }

  dismissError() {
    this.setState({ error: false });
  }

  dismissSuccess() {
    this.setState({ success: false });
  }

  render() {
    const { foods, error, success } = this.state;
    return (
      <Container>
        <Col sm="12">
          <AddFoodsSection
            {...this.state}
            onSave={this.onSave}
            onChangeName={this.onChangeName}
            onChangeCalories={this.onChangeCalories}
          />
        </Col>
        <Col sm="12">
          <Alert color="danger" isOpen={error} toggle={this.dismissError}>
            Brah, error in input values...
          </Alert>
          <Alert color="success" isOpen={success} toggle={this.dismissSuccess}>
            Brah, change saved!
          </Alert>
        </Col>
        {foods.length > 0 &&
          foods.map((food, index) => (
            <Col sm="6" className="my-1">
              <Card key={food.index} className="texft-center">
                <div
                  className="my-3"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <span className="text-center text-dark">
                    <span>Name:</span>
                    <br />
                    <span>{food.name}</span>
                  </span>
                  <span className="text-center text-dark">
                    <span>Calories:</span>
                    <br />
                    <span>{food.calories} /g</span>
                  </span>
                </div>
                <div
                  className="mb-3"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <Button
                    outline
                    color="danger"
                    className="mx-4"
                    onClick={() => this.onDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    outline
                    color="primary"
                    className="mx-4"
                    onClick={() => {}}
                  >
                    Select
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
      </Container>
    );
  }
}

const AddFoodsSection = ({
  newFoodName,
  newFoodCalories,
  onSave,
  onChangeName,
  onChangeCalories
}) => (
  <Card className="text-center mb-3">
    <CardBody>
      <CardTitle className="text-dark">Add Food</CardTitle>
      <input
        className="mt-1 mb-1"
        type="string"
        placeholder="Name"
        value={newFoodName}
        onChange={onChangeName}
      />
      <br />
      <input
        className="m-3 mb-4"
        type="number"
        placeholder="kCal /g"
        value={newFoodCalories}
        onChange={onChangeCalories}
      />
      <br />
      <Button color="primary" onClick={onSave}>
        Save
      </Button>
    </CardBody>
  </Card>
);
