import React from 'react';
import PropTypes from 'prop-types';
import GoogleLoginButton from './GoogleLoginButton';

export default {
  title: 'GoogleLoginButton',
  component: GoogleLoginButton,
  argTypes: {
    font: {
      control: { type: 'select', options: ['Roboto', 'Roboto mono'] },
    },
  },
};

export function loginWithGoogle({ font }) {
  return <GoogleLoginButton font={font} />;
}

GoogleLoginButton.args = {
  font: 'Roboto',
};

GoogleLoginButton.propTypes = {
  font: PropTypes.string,
};
