import React from 'react';
import PropTypes from 'prop-types';
import EmailForm from './EmailForm';

export default {
  title: 'EmailRegistration Form',
  component: EmailForm,
  argTypes: {
    form_width: {
      control: { type: 'range', min: 300, max: 1000, step: 50 },
    },
    btn_bgcolor: {
      control: { type: 'color' },
    },
  },
};

const EmailFormTemplate = (args) => <EmailForm {...args} />;

export const EmailRegistrationForm = EmailFormTemplate.bind({});
EmailRegistrationForm.args = {
  form_width: 400,
  btn_bgcolor: '#db643d',
};

EmailFormTemplate.propTypes = {
  form_width: PropTypes.number.isRequired,
  btn_bgcolor: PropTypes.string.isRequired,
};
