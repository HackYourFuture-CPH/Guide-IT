import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

export default {
  title: 'GoogleLoginButton',
  component: GoogleLoginButton,
};
export function loginWithGoogle() {
  return <GoogleLoginButton />;
}
