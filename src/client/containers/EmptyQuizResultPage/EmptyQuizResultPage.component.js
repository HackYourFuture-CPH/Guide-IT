import React from 'react';
import SideMenu from '../../components/sideMenubar/sideMenu';
import Buttons from '../../components/Buttons/Buttons';
import girlImg from '../../assets/images/girl.png';
import sadrobo from '../../assets/images/sadrobo.png';
import './EmptyQuizResultPage.css';

export const EmptyQuizResultPage = () => {
  // onclick function for button
  const onClick = () => {
    return null;
  };
  return (
    <section>
      <div className="noresults_page">
        <div className="sidebar">
          <SideMenu highLigtItem={3} />
        </div>
        <div className="noresults_container">
          <h2 className="noresults_text">No results!</h2>
          <img src={girlImg} className="girl_img" alt="girlplaying" />
          <div className="robo_container">
            <div className="sadrobo">
              <img src={sadrobo} alt="disappointed robo face" />
            </div>
            <div className="sadrobo_text">
              <p>You`ve skipped too many questions</p>
            </div>
          </div>
          <Buttons label="Go Home" size="big" isMono={true} onClick={onClick} />
        </div>
      </div>
    </section>
  );
};

// const EmptyQuizResult = () => {
//   return (
//     <div className="noresults_page">
//       <div className="sidebar">
//         <SideMenu id="abc" />
//       </div>
//       {/* </div> */}
//       <div className="noresults_container">
//         <h2 className="noresults_text">No results</h2>
//         <img src={girlImg} className="girl_img" alt="girlplaying"></img>
//         <div className="robo_container">
//           <div className="sadrobo">
//             <img src={sadrobo} alt="disappointed robo face"></img>
//           </div>
//           <div className="sadrobo_text">
//             <p>You've skipped too many questions</p>
//           </div>
//         </div>
//         <Buttons label="Go Home" size="big" />
//         {/* <button>Go HOME</button> */}
//       </div>
//     </div>
//   );
// };
// export default EmptyQuizResult;
