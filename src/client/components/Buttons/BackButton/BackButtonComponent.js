import React from 'react';
import PropTypes from 'prop-types';
import './BackButtonComponent.styles.css';

export default function BackButtonComponent({ onClick }) {
  return (
    <button className="back-button-component" type="button" onClick={onClick}>
      Back
    </button>
  );
}

BackButtonComponent.propTypes = {
  onClick: PropTypes.func,
};

BackButtonComponent.defaultProps = {
  onClick: null,
};
