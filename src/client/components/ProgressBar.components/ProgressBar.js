import React from 'react';
import './ProgressBar.css';

const ProgressDemo = ({ level, backgroundColor, alphaLevel }) => {
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

export default ProgressDemo;
