import React from 'react';
import robot from '../../assets/images/robot.png';
import './header.styles.css';
import PropTypes from 'prop-types';

function Header({ color, fontSize }) {
  return (
    <header className="homepage-header">
      <h2 style={{ color: `${color}`, fontSize: `${fontSize}px` }}>
        What is GuideIT?
      </h2>
      <img className="robot-image" src={robot} alt="robot" />
    </header>
  );
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

export default Header;
