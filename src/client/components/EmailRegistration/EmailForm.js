import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EmailForm.css';

export default function EmailRegistration({ formWidth, btnBgcolor }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // onchange function for input
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  // onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('please enter your email');
    } else if (!email.match(/^\w+@[a-zA-Z_]+?\.com/)) {
      setError("sorry,this email can't be registered.Let's try another one.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="email_form"
      style={{ width: `${formWidth}px` }}
    >
      <label htmlFor="email">Email address</label>
      <div className="email_container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="xyz@gmail.com"
          value={email}
          onChange={handleEmailInput}
        />
        {error !== '' && email !== '' ? <div className="warning_sign" /> : ''}
      </div>
      <div className="error-message">{error}</div>
      <button type="submit" style={{ backgroundColor: `${btnBgcolor}` }}>
        Continue
      </button>
    </form>
  );
}

EmailRegistration.propTypes = {
  formWidth: PropTypes.number.isRequired,
  btnBgcolor: PropTypes.string.isRequired,
};
