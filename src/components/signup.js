import React, { Component, Fragment } from 'react';
import { Alert, Card, Input, Button, FormGroup, Label } from 'reactstrap';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.submit = this.submit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
  }

  submit() {
    const { email, password, confirmPassword } = this.state;
    if (!email || !password || !confirmPassword) {
      return this.setState({ error: 'Please fill out all fields' });
    }
    if (password !== confirmPassword) {
      return this.setState({ error: 'Passwords do not match' });
    }
    this.props.onSubmit(email, password);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  onChangeEmail({ target }) {
    this.setState({ email: target.value });
  }

  onChangePassword({ target }) {
    this.setState({ password: target.value });
  }

  onChangeConfirmPassword({ target }) {
    this.setState({ confirmPassword: target.value });
  }

  render() {
    const { email, password, confirmPassword, error } = this.state;

    return (
      <Fragment>
        <FormGroup className="px-5 my-2">
          <Label>Email:</Label>
          <Input type="string" value={email} onChange={this.onChangeEmail} />
        </FormGroup>
        <FormGroup className="px-5 my-2">
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />
        </FormGroup>
        <FormGroup className="px-5 my-2">
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={this.onChangeConfirmPassword}
          />
        </FormGroup>
        <Alert
          className="mt-3 mb-0 mx-3"
          color="danger"
          isOpen={error}
          toggle={this.dismissError}
        >
          {this.state.error}
        </Alert>
        <Button onClick={this.submit} className="mx-5 my-4" color="primary">
          Sign Up
        </Button>
      </Fragment>
    );
  }
}
