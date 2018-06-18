import React, { Component, Fragment } from 'react';
import { Alert, Input, Button, FormGroup, Label } from 'reactstrap';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: 'test@email.com',
      password: 'password'
    };
    this.submit = this.submit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
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

  submit() {
    const { email, password } = this.state;
    if (!email || !password) {
      return this.setState({ error: 'Please fill out all fields' });
    }
    this.props.onSubmit(email, password);
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
        <Alert
          className="mt-3 mb-0 mx-3"
          color="danger"
          isOpen={Boolean(error)}
          toggle={this.dismissError}
        >
          {this.state.error}
        </Alert>
        <Button onClick={this.submit} className="mx-5 my-4" color="primary">
          Log In
        </Button>
      </Fragment>
    );
  }
}
