import React from 'react';
import Buttons from '../Buttons/Buttons.component';
import elevatorMen from '../../assets/images/elevator_men.png';
import PropTypes from 'prop-types';
import './ElevatorPitchInstructions.styles.css';

function ElevatorPitchInstructions({ onClick }) {
  return (
    <>
      <div className="main-content">
        <div className="top-text-content">
          <p>
            Imagine you enter an elevator and you ran into the executive of the
            company you`d love to work for.
          </p>
          <p>What would you say?</p>
        </div>

        <div className="main-text-content-and-image">
          <div className="left-text-content">
            <p>
              An elevator pitch is a quick speech about your background and
              experience.(It should be short enough to say it during an elevator
              ride!)
            </p>
            <p>From this particular elevator pitch you`ll get:</p>
            <ul className="elevator-pitch-list">
              <li>How and when to use it</li>
              <li>Key points to avoid on your speech</li>
              <li>Tips to write your own elevator pitch</li>
              <li>Key takeaways</li>
              <li>A template to craft your own elevator pitch</li>
            </ul>
          </div>

          <div className="right-image-content">
            <div className="pagination">0 1 2 3 4 5</div>
            <div className="background-elevator-men">
              <img src={elevatorMen} alt="Elevator men" />
            </div>
            <div className="arrows">
              <div className="elevator-instructions-arrow elevator-up" />
              <div className="elevator-instructions-arrow elevator-down" />
            </div>
          </div>
        </div>

        <div className="btn-elevator-pitch">
          <Buttons
            label="Elevator Pitch"
            size="big"
            isMono={true}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
}

export default ElevatorPitchInstructions;
ElevatorPitchInstructions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
