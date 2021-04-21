import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({
  label,
  width,
  font,
  color,
  backgroundColor,
}) {
  return (
    <div>
      <button
        type="submit"
        className="buttons"
        style={{
          width: `${width}%`,
          fontfamily: `${font}`,
          color: `${color}`,
          backgroundColor: `${backgroundColor}`,
        }}
      >
        {label}
      </button>
    </div>
  );
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
