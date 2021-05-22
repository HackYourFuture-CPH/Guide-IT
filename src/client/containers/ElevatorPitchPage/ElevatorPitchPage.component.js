import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import ElevatorPitchInstructions from '../../components/ElevatorPitchInstructions/ElevatorPitchInstructions.component';
// waiting for the elevator component to be mergend, will remove it after
// import Elevator from '../../components/Elevator/Elevator.component';
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
              Elevator Component
              {/* <Elevator level={0} /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
