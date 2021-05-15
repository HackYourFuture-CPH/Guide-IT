import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import rediLogo from '../../assets/images/redi-logo.png';
import hyfLogo from '../../assets/images/hyf-logo.png';
import udacityImg from '../../assets/images/Next_page_imgs/udacity.png';
import courseraImg from '../../assets/images/Next_page_imgs/coursera.png';
import linkedinImg from '../../assets/images/Next_page_imgs/linkedinLearn.png';
import lyndaImg from '../../assets/images/Next_page_imgs/lynda.png';
import cfImg from '../../assets/images/Next_page_imgs/cf.png';
import udemyImg from '../../assets/images/Next_page_imgs/udemy.png';
import roundImg from '../../assets/images/Next_page_imgs/round.png';
import { useHistory, NavLink } from 'react-router-dom';
import './NextStepsPage.styles.css';

export const NextStepsPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/ElevatorPage');
  }
  return (
    <div className="main_part_nextPage">
      <div>
        <PageHeader />
      </div>
      <div className="middle_part">
        <div className="sidemenu_nextpage">
          <SideMenu />
        </div>
        <div className="orange_box" />
        <div className="white_box">
          <h1>YOUR NEXT STEPS</h1>
          <p>
            <strong>Suggestions for Upgrading your Knowledge :</strong>
          </p>
          <p>Checkout our schools</p>
          <div className="mainImages">
            <div className="rediImage">
              <NavLink to="https://www.redi-school.org">
                <img
                  src={rediLogo}
                  alt="redi-logo"
                  width="50px"
                  height="50px"
                />
              </NavLink>
              <span className="imageName">Redi School</span>
            </div>
            &nbsp;
            <div className="hyfImage">
              <NavLink to="https://www.hackyourfuture.dk">
                <img
                  className="hyfLogo"
                  src={hyfLogo}
                  alt="hyf-logo"
                  width="64px"
                  height="50px"
                />
              </NavLink>
              <span className="imageName">HackYourFuture School</span>
            </div>
          </div>
          <p>
            Or other website with some awsome{' '}
            <strong>
              Online <br /> courses like:
            </strong>
          </p>
          <nav>
            <ul className="footerImages">
              <NavLink to="https://www.udacity.com/blog/category/free-courses">
                <li>
                  <img
                    src={udacityImg}
                    alt="udacity-img"
                    width="75px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.coursera.org">
                <li>
                  <img
                    src={courseraImg}
                    alt="coursera-img"
                    width="50px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.linkedin.com/">
                <li>
                  <img
                    src={linkedinImg}
                    alt="linkedin-img"
                    width="165px"
                    height="25px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.lynda.com">
                <li>
                  <img
                    src={lyndaImg}
                    alt="lynda-img"
                    width="50px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://careerfoundry.com">
                <li>
                  <img src={cfImg} alt="cf-img" width="50px" height="50px" />
                </li>
              </NavLink>
              <NavLink to="https://www.udemy.com">
                <li>
                  <img
                    src={udemyImg}
                    alt="udemy-img"
                    width="111px"
                    height="44px"
                  />
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="circleImage">
        <img className="cImage" src={roundImg} alt="round-img" />
      </div>
      <div className="elevator_div">
        <Buttons
          className="elevator_button"
          label="Visit the Elevator"
          size="big"
          isMono={true}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
