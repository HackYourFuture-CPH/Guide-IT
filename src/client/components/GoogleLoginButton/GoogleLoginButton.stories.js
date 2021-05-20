import React from 'react';
import GoogleLoginButton from './GoogleLoginButton.component';

export default {
  title: 'GoogleLoginButton',
  component: GoogleLoginButton,
};

export function loginWithGoogle() {
  return <GoogleLoginButton />;
}
