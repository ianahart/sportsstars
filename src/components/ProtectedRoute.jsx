import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (this.props.isSignedIn.isSignedIn) {
            return <Component {...props} />;
          } else if (this.props.isSignedIn.isSignedIn === false) {
            return <Redirect to="/" />;
          } else {
            return null;
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
