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
      className="form-With-Avatar"
      style={{
        color: `${color}`,
        width: `${width}px`,
        fontFamily: `${fontFamily}`,
      }}
    >
      <div className="avatar-Image">
        <figure>
          <img src={userImage} alt="avatarimage" />
          <figcaption>{userName}</figcaption>
        </figure>
      </div>
      <div className="container">
        <form>
          <div className="form-Group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div className="form-Group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={userPassword}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div className="edit-Link">
            <a
              href="#dummy-Component"
              style={{
                color: `${color}`,
              }}
            >
              Edit
            </a>
          </div>
        </form>
      </div>
      <div id="dummy-Component" />
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
