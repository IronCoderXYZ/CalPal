import { connect } from 'react-redux';
import React, { Component } from 'react';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      const { history, loggedIn } = this.props;
      if (!loggedIn) return history.push('/auth');
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { loggedIn: auth.loggedIn };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
