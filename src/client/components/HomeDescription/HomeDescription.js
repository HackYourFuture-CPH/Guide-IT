import React from 'react';
import './HomeDescription.styles.css';

export default function HomeDescription() {
  return (
    <div className="home-description">
      <p className="home-description-upper">
        <strong>GuideIT </strong>
        is a tool created to help newcomers find their professional way in
        Denmark.
      </p>
      <p className="home-description-lower">Are you looking for/to:</p>
    </div>
  );
}
