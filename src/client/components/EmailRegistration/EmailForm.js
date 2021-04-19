import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EmailForm.css';

export default function EmailRegistration({ form_width, btn_bgcolor }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setError('');
  };

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
      style={{ width: `${form_width}px` }}
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
        {(error !== '') & (email !== '') ? (
          <div className="warning_sign"></div>
        ) : (
          ''
        )}
      </div>
      <div className="error-message">{error}</div>
      <button type="submit" style={{ backgroundColor: `${btn_bgcolor}` }}>
        Continue
      </button>
    </form>
  );
}

EmailRegistration.propTypes = {
  form_width: PropTypes.number.isRequired,
  btn_bgcolor: PropTypes.string.isRequired,
};

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function SignIn({ onSubmit }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleEmailInput = (e) => setEmail(e.target.value);
//   const handlePasswordInput = (e) => setPassword(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ email, password });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email:{' '}
//         <input
//           type="email"
//           name="email"
//           placeholder="Write your email"
//           value={email}
//           onChange={handleEmailInput}
//           required
//         />
//       </label>
//       <label htmlFor="password">
//         Password:{' '}
//         <input
//           type="password"
//           name="password"
//           placeholder="Write your password"
//           value={password}
//           onChange={handlePasswordInput}
//           required
//         />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }

// SignIn.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
