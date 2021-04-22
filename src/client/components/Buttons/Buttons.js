import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.styles.css';
import classNames from 'classnames';

export default function Buttons({
  label,
  size, // it's either small or big
  isMono, // if true the font is Roboto+Mono otherwise is Roboto
  color, // it can be orange, grey or white
  onClick,
}) {
  return (
    <button
      type="submit"
      className={classNames('buttons', color, size, {
        mono: isMono === true,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Buttons.defaultProps = {
  size: 'small',
  color: 'orange',
};

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big']),
  isMono: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(['orange', 'grey', 'white']),
  onClick: PropTypes.func.isRequired,
};
