import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, text, width, height, font }) => {
  return (
    <button
      className="button-container"
      type="button"
      style={{
        backgroundColor: `${color}`,
        width: `${width}px`,
        height: `${height}px`,
        fontFamily: `${font}, monospace`,
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
};

export default Button;
