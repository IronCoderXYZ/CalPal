import React from 'react';
import Keyboard from './Keyboard';
import {
  Col,
  Card,
  Input,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap';

export default ({
  input,
  onInputChange,
  subtractCalories,
  addCalories,
  onChangeKeyboard
}) => (
  <Col sm="12">
    <Card className="px-5 text-dark text-center">
      <p className="my-3">Add Calories</p>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Calories:</InputGroupText>
        </InputGroupAddon>
        <Input disabled type="number" value={input} onChange={onInputChange} />
      </InputGroup>
      <Keyboard onChange={number => onChangeKeyboard(number)} />

      <div
        className="my-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button
          color="danger"
          className="px-4"
          onClick={() => subtractCalories(Number(input))}
        >
          Sub
        </Button>
        <Button
          color="primary"
          className="px-4"
          onClick={() => addCalories(Number(input))}
        >
          Add
        </Button>
      </div>
    </Card>
  </Col>
);
