import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import rediLogo from '../../assets/images/REDI-logo.png';
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
    history.push('/elevator-pitch');
  }
  return (
    <div className="main-part-next-page">
      <div>
        <PageHeader />
      </div>
      <div className="middle-part">
        <div className="sidemenu-nextpage">
          <SideMenu />
        </div>
        <div className="orange-box" />
        <div className="white-box">
          <h1>YOUR NEXT STEPS</h1>
          <p>
            <strong>Suggestions for Upgrading your Knowledge :</strong>
          </p>
          <p>Checkout our schools</p>
          <div className="main-images">
            <div className="redi-image-next-page">
              <NavLink to="https://www.redi-school.org">
                <img
                  src={rediLogo}
                  alt="ReDI School"
                  width="50px"
                  height="50px"
                />
              </NavLink>
              <span className="image-name">ReDI School</span>
            </div>
            &nbsp;
            <div className="hyf-image-next-page">
              <NavLink to="https://www.hackyourfuture.dk">
                <img
                  className="hyf-logo-next-page"
                  src={hyfLogo}
                  alt="HackYourFuture Copenhagen"
                  width="64px"
                  height="50px"
                />
              </NavLink>
              <span className="image-name">HackYourFuture School</span>
            </div>
          </div>
          <p>
            Or other website with some awsome{' '}
            <strong>
              Online <br /> courses like:
            </strong>
          </p>
          <nav>
            <ul className="footer-images">
              <NavLink to="https://www.udacity.com/blog/category/free-courses">
                <li>
                  <img
                    src={udacityImg}
                    alt="Udacity"
                    width="75px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.coursera.org">
                <li>
                  <img
                    src={courseraImg}
                    alt="Coursera"
                    width="50px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.linkedin.com/">
                <li>
                  <img
                    src={linkedinImg}
                    alt="LinkedIn"
                    width="165px"
                    height="25px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.lynda.com">
                <li>
                  <img src={lyndaImg} alt="Lynda" width="50px" height="50px" />
                </li>
              </NavLink>
              <NavLink to="https://careerfoundry.com">
                <li>
                  <img
                    src={cfImg}
                    alt="Career Foundry"
                    width="50px"
                    height="50px"
                  />
                </li>
              </NavLink>
              <NavLink to="https://www.udemy.com">
                <li>
                  <img src={udemyImg} alt="Udemy" width="111px" height="44px" />
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="circle-image">
        <img className="c-image" src={roundImg} alt="Guide IT" />
      </div>
      <div className="elevator-div">
        <Buttons
          label="Visit the Elevator"
          size="big"
          isMono={true}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
