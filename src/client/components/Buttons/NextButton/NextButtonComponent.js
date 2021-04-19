import React from 'react';
import PropTypes from 'prop-types';
import './NextButtonComponent.styles.css';

export default function NextButtonComponent({ onClick }) {
  return (
    <button className="next-button-component" type="button" onClick={onClick}>
      Next
    </button>
  );
}

NextButtonComponent.propTypes = {
  onClick: PropTypes.func,
};

NextButtonComponent.defaultProps = {
  onClick: null,
};
