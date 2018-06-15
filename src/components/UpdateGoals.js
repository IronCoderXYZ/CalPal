import React from 'react';
import {
  Col,
  Card,
  Input,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap';

export default ({ newGoal, onInputChange, onSave, onCancel }) => (
  <Col>
    <Card className="px-5 text-dark text-center">
      <p className="my-3">Update Goals</p>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>New Goal:</InputGroupText>
        </InputGroupAddon>
        <Input type="number" value={newGoal} onChange={onInputChange} />
      </InputGroup>
      <div
        className="mt-4 mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button color="danger" className="px-4" onClick={onCancel}>
          Cancel
        </Button>
        <Button color="primary" className="px-4" onClick={onSave}>
          Save
        </Button>
      </div>
    </Card>
  </Col>
);
