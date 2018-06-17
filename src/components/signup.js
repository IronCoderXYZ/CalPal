import React, { Fragment } from 'react';
import { Card, Input, Button, FormGroup, Label } from 'reactstrap';

export default () => (
  <Fragment>
    <FormGroup className="px-5 my-2">
      <Label>Username:</Label>
      <Input type="string" value={''} onChange={() => {}} />
    </FormGroup>
    <FormGroup className="px-5 my-2">
      <Label>Password:</Label>
      <Input type="password" value={''} onChange={() => {}} />
    </FormGroup>
    <FormGroup className="px-5 my-2">
      <Label>Confirm Password:</Label>
      <Input type="password" value={''} onChange={() => {}} />
    </FormGroup>
    <Button className="mx-5 my-4" color="primary">
      Sign Up
    </Button>
  </Fragment>
);
