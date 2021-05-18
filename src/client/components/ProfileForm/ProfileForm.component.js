import React from 'react';
import './ProfileForm.styles.css';
import PropTypes from 'prop-types';

const Avatar = ({
  color,
  width,
  fontFamily,
  userName,
  userEmail,
  userPassword,
  userImage,
  onChange,
}) => {
  return (
    <div
      className="form-with-avatar"
      style={{
        color: `${color}`,
        width: `${width}px`,
        fontFamily: `${fontFamily}`,
      }}
    >
      <div className="avatar-image">
        <figure>
          <img src={userImage} alt="avatar image" />
          <figcaption>{userName}</figcaption>
        </figure>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={userPassword}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div className="edit-link">
            <a
              href="#dummy-component"
              style={{
                color: `${color}`,
              }}
            >
              Edit
            </a>
          </div>
        </form>
      </div>
      <div id="dummy-component" />
    </div>
  );
};

Avatar.propTypes = {
  color: PropTypes.oneOf(['#DB643D', '#535C75', '#000000']),
  width: PropTypes.number,
  fontFamily: PropTypes.oneOf(['Roboto', 'Roboto Mono']),
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  color: '#535C75',
  fontFamily: 'Roboto Mono',
  width: 400,
};
export default Avatar;
