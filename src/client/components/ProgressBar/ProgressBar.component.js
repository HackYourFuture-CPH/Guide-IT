import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.styles.css';

const ProgressBar = ({ level, backgroundColor, alphaLevel }) => {
  return (
    <div className="progress">
      <span className="progress-status" style={{ width: `${level}%` }}>
        <span className="progress-text">PROGRESS</span>
      </span>
      <span
        style={{
          width: `${100 - level}%`,
          height: 'inherit',
          backgroundColor: `${backgroundColor}`,
          opacity: `${alphaLevel}`,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  level: PropTypes.number,
  backgroundColor: PropTypes.string,
  alphaLevel: PropTypes.number,
};

ProgressBar.defaultProps = {
  level: '20',
  backgroundColor: 'red',
  alphaLevel: '0.5',
};

export default ProgressBar;
