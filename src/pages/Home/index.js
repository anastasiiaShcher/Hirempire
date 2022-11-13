import { useState, useRef } from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { ScrollButton } from "../../components/ScrollBtn";
import { ContactBlock } from "../../components/ContactBlock";
import { TalentsList } from "../../components/TalentsList";
import { HomeCompaniesBlock } from "../../components/HomeCompaniesBlock";
import {
  backgroundAboutUs,
  backgroundAboutUsMobile,
  switcherBlack,
  switcherGrey,
  switcherMobile,
  homeFocus,
  hireBackground,
  hireBackgroundMobileTop,
  hireBackgroundMobileBottom
} from "../../imagesContants";
import "./home.scss";

export const Home = () => {
  const ref = useRef(null);

  const [lookingTalent, setLookingTalent] = useState(true);
  const [hideTalents, setHideTalents] = useState(true);

  return (
    <>
      <div className="home-main">
        <Header isBlack={false} />
        <div className="home-bottom">
          <ScrollButton refVariable={ref} />
          <div className="text-block">
            <a>
              <p>I’m looking for new talent</p>
            </a>
            <a>
              <p>I’m looking for dream job</p>
            </a>
          </div>
        </div>
      </div>
      <div className="about-us-block" ref={ref}>
        <img
          src={backgroundAboutUs}
          alt="background-text"
          className="background-img"
        />
        <img
          src={backgroundAboutUsMobile}
          alt="background-text"
          className="background-img-mobile"
        />
        <div className="text-block">
          <h2>About us</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hirempire
            links businesses with talent. Our mission is to bring innovation and
            empowerment to the forefront of the workplace. We strive to provide
            our candidates with ample opportunities for success and to provide
            our clients with well-screened and qualified candidates.
          </p>
        </div>
      </div>
      <div
        className={`home-looking ${lookingTalent ? "grey-home" : "black-home"}`}
      >
        <div className="switch-block">
          <button
            className={`${lookingTalent && "active-button"}`}
            onClick={() => setLookingTalent(true)}
          >
            I’m looking for new talent
          </button>
          <button
            className={`${!lookingTalent && "active-button"}`}
            onClick={() => setLookingTalent(false)}
          >
            I’m looking for dream job
          </button>
        </div>
        <div className="image-mobile-wrapper">
          <img src={switcherMobile} alt="decoration" className="image-mobile" />
        </div>
        <div className="main-text-block">
          <span className="text top-text text-big">Fringilla</span>
          <span className="text left-text text-big">dolor</span>
          <span className="text bottom-text text-big">consect</span>
          <span className="text right-text text-small">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            hire the best and build your business empire или hire the best and
            turn your business into empire
          </span>
          <span className="text text-mobile text-small">
            hire the best and build your business empire или hire the best and
            turn your business into empire
          </span>
        </div>
        <span className="button">i'm in</span>
        {lookingTalent ? (
          <img src={switcherGrey} alt="decoration" className="decoration" />
        ) : (
          <img src={switcherBlack} alt="decoration" className="decoration" />
        )}
      </div>
      <div className="home-focus">
        <img src={homeFocus} alt="background" />
        <div className="main-block">
          <h2 className="main-text">Our focus:</h2>
          <ul className="speciality-list">
            <li>
              <div className="speciality-item">
                <span>(01)</span>
                <p>IT</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(02)</span>
                <p>Engineering</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(03)</span>
                <p>HR / Operations</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(04)</span>
                <p>Accounting / Finance</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(05)</span>
                <p>IT Sales / Marketing</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(06)</span>
                <p>Business Development</p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="speciality-item">
                <span>(07)</span>
                <p>Business Development</p>
              </div>
              <span className="line"></span>
            </li>
          </ul>
        </div>
      </div>
      <HomeCompaniesBlock />
      <div className="home-talents">
        <div className="page-header">
          <span>Talents</span>
          <button
            className={`${hideTalents ? "open-btn" : "rotate open-btn"}`}
            onClick={() => {
              setHideTalents(!hideTalents);
            }}
          >
            <svg
              className="arrow"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F1F1F1" />
              <path
                d="M26.9095 40.9695L35.2443 49.3044L43.6917 40.8569"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M35.2443 49.3044V20.6957"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="arrow-mobile"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="#F1F1F1" />
              <path
                d="M11.1478 16.973L14.6008 20.426L18.1005 16.9264"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M14.6016 20.4261V8.57397"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <hr />
        <p className="text">
          We know the importance of job satisfaction. We have the connections,
          knowledge and expertise to get you where you want to be. Utilize our
          staffing and recruitment expertise to locate the ideal job that
          matches your abilities, experience level, career ambitions, hobbies,
          and growth requirements.
        </p>
        <TalentsList isHide={hideTalents} />
      </div>
      <div className="hires-block">
        <img src={hireBackground} alt="background" className="backgroung-img" />
        <img src={hireBackgroundMobileTop} alt="background" className="backgroung-img-mobile-top" />
        <img src={hireBackgroundMobileBottom} alt="background" className="backgroung-img-mobile-bottom" />
        <div className="content-block">
          <h2 className="article">Latest hires</h2>
          <div className="carousel-block-1">
            <Carousel />
          </div>
          <Carousel />
        </div>
      </div>
      <ContactBlock />
    </>
  );
};
