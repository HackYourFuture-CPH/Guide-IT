import React from 'react';
import PropTypes from 'prop-types';
import './CardProfileResultComponent.styles.css';

export default function CardProfileResultComponent({ title, children }) {
  return (
    <div className="card-profile-result-component">
      <h2>{title}</h2>
      <p>(Do I keep this?)</p>
      {children}
    </div>
  );
}

CardProfileResultComponent.propTypes = {
  title: PropTypes.string.isRequired,

  children: PropTypes.node,
};

CardProfileResultComponent.defaultProps = {
  children: null,
};
