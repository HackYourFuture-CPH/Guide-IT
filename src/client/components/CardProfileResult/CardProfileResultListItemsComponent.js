import React from 'react';
import PropTypes from 'prop-types';
import './CardProfileResultListItemsComponent.styles.css';

export default function CardProfileResultListItemsComponent({ results }) {
  return (
    <ul className="card-profile-result-list-items-component">
      {results.map((result) => {
        return <li>{result}</li>;
      })}
    </ul>
  );
}

CardProfileResultListItemsComponent.propTypes = {
  results: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};
