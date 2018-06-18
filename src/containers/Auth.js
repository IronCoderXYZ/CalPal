// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Alert, Col, Container, Card, Button } from 'reactstrap';
// Local Imports
import * as actions from '../actions';
import Signin from '../components/signin';
import Signup from '../components/signup';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { showSignup: false };
    this.onSignin = this.onSignin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  onSignin(email, password) {
    this.props.dispatch({
      type: actions.SIGNIN_USER,
      payload: { email, password }
    });
  }

  onSignup(email, password) {
    this.props.dispatch({
      type: actions.ADD_USER,
      payload: { email, password }
    });
  }

  toggleSignup() {
    this.setState({ showSignup: !this.state.showSignup });
  }

  render() {
    const { loggedIn } = this.props;
    const { showSignup } = this.state;
    if (loggedIn) this.props.history.push('/');
    return (
      <Container>
        <Col sm="6 mx-auto">
          <Card className="text-dark">
            <h4 className="text-center my-4">
              CalPal {showSignup ? 'Sign Up' : 'Sign In'}
            </h4>
            <Alert className="mx-3" color="danger" isOpen={this.props.error}>
              {this.props.error}
            </Alert>
            {showSignup ? (
              <Signup onSubmit={this.onSignup} />
            ) : (
              <Signin onSubmit={this.onSignin} />
            )}
          </Card>
          <div className="text-center mt-3">
            <Button color="secondary" onClick={this.toggleSignup}>
              {showSignup ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </Col>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn, error: auth.error };
};

export default withRouter(connect(mapStateToProps)(Auth));
