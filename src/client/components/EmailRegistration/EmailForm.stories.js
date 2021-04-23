import React from 'react';
import PropTypes from 'prop-types';
import EmailForm from './EmailForm';

export default {
  title: 'EmailRegistration Form',
  component: EmailForm,
  argTypes: {
    formWidth: {
      control: { type: 'range', min: 300, max: 1000, step: 50 },
    },
    fontFamily: {
      control: { type: 'select', options: ['Roboto', 'Roboto mono'] },
    },
  },
};

const EmailFormTemplate = ({ formWidth, fontFamily }) => {
  return <EmailForm formWidth={formWidth} fontFamily={fontFamily} />;
};
export const EmailRegistrationForm = EmailFormTemplate.bind({});
EmailRegistrationForm.args = {
  formWidth: 400,
  fontFamily: 'Roboto Mono',
};

EmailFormTemplate.propTypes = {
  formWidth: PropTypes.number.isRequired,
  fontFamily: PropTypes.string.isRequired,
};
