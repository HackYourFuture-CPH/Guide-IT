import React from 'react';
import PropTypes from 'prop-types';
import './CardProfileResultComponent.styles.css';
import CardProfileResultListItemsComponent from './CardProfileResultListItemsComponent';

export default function CardProfileResultComponent({ title, results }) {
  return (
    <div className="card-profile-result-component">
      <h2>{title}</h2>
      <CardProfileResultListItemsComponent results={results} />
    </div>
  );
}

CardProfileResultComponent.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};
