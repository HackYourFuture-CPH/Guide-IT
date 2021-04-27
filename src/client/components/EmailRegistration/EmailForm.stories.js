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
  },
};

const EmailFormTemplate = ({ formWidth }) => {
  return <EmailForm formWidth={formWidth} />;
};
export const EmailRegistrationForm = EmailFormTemplate.bind({});
EmailRegistrationForm.args = {
  formWidth: 400,
};

EmailFormTemplate.propTypes = {
  formWidth: PropTypes.number.isRequired,
};