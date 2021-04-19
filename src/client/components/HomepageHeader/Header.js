import React from 'react';
import robot from '../../assets/images/robot.png';
import './header.css';
import PropTypes from 'prop-types';

function Header({ color, size }) {
  return (
    <header className="homepage-header">
      <h2 style={{ color: `${color}`, fontSize: `${size}px` }}>
        What is GuideIT?
      </h2>
      <img className="robot-image" src={robot} alt="robot" />
    </header>
  );
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Header;
