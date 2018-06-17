// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Col, Container, Card, Button } from 'reactstrap';
// Local Imports
import Signin from '../components/signin';
import Signup from '../components/signup';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { showSignup: false };
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup() {
    this.setState({ showSignup: !this.state.showSignup });
  }

  render() {
    const { showSignup } = this.state;
    return (
      <Container>
        <Col sm="6 mx-auto">
          <Card className="text-dark">
            <h4 className="text-center my-4">CalPal Sign In</h4>
            {showSignup ? <Signup /> : <Signin />}
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
  return { loggedIn: auth.loggedIn };
};

export default connect(mapStateToProps)(Auth);
