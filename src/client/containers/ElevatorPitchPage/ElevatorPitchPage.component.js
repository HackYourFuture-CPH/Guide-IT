import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import ElevatorPitchInstructions from '../../components/ElevatorPitchInstructions/ElevatorPitchInstructions.component';
import Elevator from './Elevator.component';
// import RoboModal from '../../components/RoboModal/RoboModal.component';
import './ElevatorPitchPage.styles.css';

export const ElevatorPitchPage = () => {
  const [instructions, setInstructions] = useState(true);

  const handleOnClick = () => {
    setInstructions(false);
  };
  return (
    <div className="elevator-page">
      <PageHeader />
      <div className="elevator-container">
        <div className="side-menu">
          <SideMenu />
        </div>
        <div className="elevator-instructions">
          {instructions ? (
            <ElevatorPitchInstructions onClick={handleOnClick} />
          ) : (
            <div>
              <Elevator level={0} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
