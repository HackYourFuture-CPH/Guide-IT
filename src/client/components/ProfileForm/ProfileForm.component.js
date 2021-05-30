import React from 'react';
import './ProfileForm.styles.css';
import PropTypes from 'prop-types';

const Avatar = ({
  color,
  width,
  fontFamily,
  userName,
  userEmail,
  userImage,
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
          <img src={userImage} alt="avatarimage" />
          <figcaption>{userName}</figcaption>
        </figure>
      </div>
      <div className="container">
        <div className="email">Email: {userEmail}</div>
      </div>
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
};

Avatar.defaultProps = {
  color: '#535C75',
  fontFamily: 'Roboto Mono',
  width: 400,
};
export default Avatar;
