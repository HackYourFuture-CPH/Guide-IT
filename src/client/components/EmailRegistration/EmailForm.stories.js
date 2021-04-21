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
    fontFamily: {
      control: { type: 'select', options: ['Roboto', 'Roboto mono'] },
    },
  },
};

const EmailFormTemplate = ({ formWidth, btnBgcolor, fontFamily }) => {
  return (
    <EmailForm
      formWidth={formWidth}
      btnBgcolor={btnBgcolor}
      fontFamily={fontFamily}
    />
  );
};
export const EmailRegistrationForm = EmailFormTemplate.bind({});
EmailRegistrationForm.args = {
  formWidth: 400,
  btnBgcolor: '#db643d',
  fontFamily: 'Roboto Mono',
};

EmailFormTemplate.propTypes = {
  formWidth: PropTypes.number.isRequired,
  btnBgcolor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
};
