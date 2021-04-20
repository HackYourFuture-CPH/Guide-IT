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
    btnBgcolor: {
      control: { type: 'color' },
    },
  },
};

const EmailFormTemplate = ({ formWidth, btnBgcolor }) => {
  return <EmailForm formWidth={formWidth} btnBgcolor={btnBgcolor} />;
};
export const EmailRegistrationForm = EmailFormTemplate.bind({});
EmailRegistrationForm.args = {
  formWidth: 400,
  btnBgcolor: '#db643d',
};

EmailFormTemplate.propTypes = {
  formWidth: PropTypes.number.isRequired,
  btnBgcolor: PropTypes.string.isRequired,
};
