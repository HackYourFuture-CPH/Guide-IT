import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.styles.css';

export default function Buttons({
  label,
  size, // it's either small or big
  isMono, // if true the font is Roboto+Mono otherwise is Roboto
  color, // it can be orange, grey or white
  onClick, // the function
}) {
  return (
    <button
      type="button"
      className={`buttons ${color} ${size} ${isMono ? `mono` : ``}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Buttons.defaultProps = {
  size: 'small-button',
  color: 'orange',
};

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small-button', 'big']),
  isMono: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(['orange', 'grey', 'white']),
  onClick: PropTypes.func.isRequired,
};
