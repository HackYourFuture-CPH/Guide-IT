import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EmailForm.css';
export default function EmailRegistration({ formWidth, fontFamily }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // onchange function for input
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  // onSubmit function
  const handleSubmit = (e) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    // if enter key is pressed, validating user email.
    if (e.key === 'Enter') {
      e.preventDefault();
      if (email === '') {
        setError('please enter your email');
      } else if (!pattern.test(email)) {
        setError("sorry,this email can't be registered.Let's try another one.");
      }
    }
  };

  return (
    <form
      className="email_form"
      style={{
        width: `${formWidth}px`,
        fontFamily: `${fontFamily}`,
      }}
    >
      <label htmlFor="email">Email address</label>
      <div className="email_container">
        <span className="input-icon" />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="xyz@gmail.com"
          value={email}
          onChange={handleEmailInput}
          onKeyPress={handleSubmit}
        />
        {error !== '' ? <span className="warning_sign" /> : ''}
      </div>
      <div className="error_message">{error}</div>
    </form>
  );
}

EmailRegistration.propTypes = {
  formWidth: PropTypes.number.isRequired,
  fontFamily: PropTypes.string.isRequired,
};
