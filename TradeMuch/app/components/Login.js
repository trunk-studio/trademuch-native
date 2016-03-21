
import React, {
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';

import FBSDKLogin, {
  FBSDKLoginButton
} from 'react-native-fbsdklogin';

import FBSDKCore, {
  FBSDKAccessToken
} from 'react-native-fbsdkcore';

import {
  requestUserInfo
} from '../actions/AuthActions'

var styles = StyleSheet.create(require('./styles.js'));

export default class Login extends React.Component{
  render() {
    console.log(this.props);
    return (
      <View style={this.props.style}>
      <FBSDKLoginButton
        style={styles.loginButton}
        onWillLogin={() => {
          FBSDKAccessToken.getCurrentAccessToken((result) => {
            // console.log('token',result);
            if (result == null) {
              // alert('Start logging in.');
            } else {
              // alert('Start logging out.');
            }
          });
          return true;
        }}
        onLoginFinished={(error, result) => {
          if (error) {
            alert('Error logging in.');
          } else {
            if (result.isCancelled) {
              // alert('Login cancelled.');
            } else {
              FBSDKAccessToken.getCurrentAccessToken(async userIdentities => {
                this.props.requestUserInfo(userIdentities);
                if (result == null) {
                  // alert('Start logging in.');
                } else {
                  // alert('Start logging out.');
                }
              });
              // alert('Logged in.');
            }
          }
        }}
        onLogoutFinished={() => {}}
        readPermissions={[]}
        publishPermissions={[]}/>
      </View>
    );
  }
};

function _injectPropsFromStore(state) {
  return {
  }
};

const _injectPropsFormActions = {
  requestUserInfo
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Login);