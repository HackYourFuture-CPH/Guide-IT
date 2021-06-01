import React from 'react';
import PropTypes from 'prop-types';
import './CardProfileResult.styles.css';

export default function CardProfileResultComponent({ title, results }) {
  return (
    <div className="card-profile-result-component">
      <h2 className="card-profile-result-title">{title}</h2>
      <ul className="card-profile-result-list-items">
        {results.map((result) => {
          return (
            <li className="card-profile-result-list-item" key={result}>
              {result}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CardProfileResultComponent.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};
