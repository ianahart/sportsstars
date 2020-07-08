import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

import '../css/GoogleAuth.css';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID_PROD,
          scope: 'email',
        })
        .then(() => {
          this.user = window.gapi.auth2.getAuthInstance();
          this.onUserAuthChange(this.user.isSignedIn.get());
          this.user.isSignedIn.listen(this.onUserAuthChange);
        });
    });
  }

  onUserAuthChange = (isSignedIn) => {
    return isSignedIn
      ? this.props.signIn(this.user.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.user.signIn();
  };

  onSignOutClick = () => {
    this.user.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="auth-button" onClick={this.onSignOutClick}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="auth-button" onClick={this.onSignInClick}>
          <i className="fab fa-google"></i>Sign In With Google
        </button>
      );
    }
  }

  render() {
    return (
      <div className="auth-button-container">{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
