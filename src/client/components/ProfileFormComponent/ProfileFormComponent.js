import React from 'react';
import avatarimage from '../../assets/images/avatar.png';
import './ProfileFormComponent.css';
import PropTypes from 'prop-types';

const Avatar = ({ color, width }) => {
  return (
    <div
      className="form-With-Avatar"
      style={{
        color: `${color}`,
        width: `${width}px`,
      }}
    >
      <div className="avatar-Image">
        <figure>
          <img src={avatarimage} alt="avatarimage" />
          <figcaption>Anne</figcaption>
        </figure>
      </div>
      <div className="container">
        <form>
          <div className="form-Group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" placeholder="anne@gmail.com" />
          </div>
          <div className="form-Group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="xxxxxxxxxxxx" />
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
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Avatar;
