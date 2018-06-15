// NPM Imports
import Styled from 'styled-components';
import React, { Component, Fragment } from 'react';
// Local Imports

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [], newFoodName: '', newFoodCalories: 0 };
    this.onSave = this.onSave.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
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
    this.setState({
      foods: [...foods, { name: newFoodName, calories: newFoodCalories }],
      newFoodName: '',
      newFoodCalories: 0
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

  render() {
    const { foods } = this.state;
    return (
      <div>
        <p className="overview-title">Add Foods</p>
        <AddFoodsSection
          {...this.state}
          onSave={this.onSave}
          onChangeName={this.onChangeName}
          onChangeCalories={this.onChangeCalories}
        />
        {foods.length > 0 &&
          foods.map((food, index) => (
            <Card key={food.name}>
              <Ptag>{food.name}</Ptag>
              <Ptag>{food.calories}</Ptag>
              <Icon
                className="fa fa-trash"
                onClick={() => this.onDelete(index)}
              />
            </Card>
          ))}
      </div>
    );
  }
}

const AddFoods = Styled.section`
  width: 90%;
  margin: auto;
  padding: 10px;
  border: solid 1px white;
`;

const InputFields = Styled.section`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Card = Styled.div`
  height: 60px;
  margin: 20px;
  display: flex;
  border: dashed 1px white;
  flex-direction: column;
  justify-content: center;
`;

const Ptag = Styled.p`
  margin: 0;
  padding: 2px;
`;

const Icon = Styled.i`
  right: 80px;
  position: absolute;
`;

const AddFoodsSection = ({
  newFoodName,
  newFoodCalories,
  onSave,
  onChangeName,
  onChangeCalories
}) => (
  <AddFoods>
    <InputFields>
      <input
        type="string"
        placeholder="Name"
        value={newFoodName}
        onChange={onChangeName}
      />
      <input
        type="number"
        placeholder="kCal /g"
        value={newFoodCalories}
        onChange={onChangeCalories}
      />
    </InputFields>
    <i className="fa fa-check fa-2x" onClick={onSave} />
  </AddFoods>
);
