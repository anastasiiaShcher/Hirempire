import { useState, useRef } from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { ScrollButton } from "../../components/ScrollBtn";
import { ContactBlock } from "../../components/ContactBlock";
import { TalentsList } from "../../components/TalentsList";
import {
  backgroundHome2,
  imgBlack,
  imgGrey,
  backgroundHome4,
  hireBackground,
} from "../../imagesContants";
import "./home.scss";

export const Home = () => {
  const ref = useRef(null);

  const [lookingTalent, setLookingTalent] = useState(true);
  const [activeCard, setActiveCard] = useState(1);
  const [hideTalents, setHideTalents] = useState(true);

  const handleClickOnCard = (cardNumber) => {
    setActiveCard(cardNumber);
  };

  return (
    <>
      <div className="home-1">
        <Header isBlack={false}/>
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
      <div className="home-2" ref={ref}>
        <img
          src={backgroundHome2}
          alt="background-text"
          className="background-img"
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
      <div className={`home-3 ${lookingTalent ? "grey-home" : "black-home"}`}>
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
        <div className="main-text-block">
          <span className="text top-text text-big">Fringilla</span>
          <span className="text left-text text-big">dolor</span>
          <span className="text bottom-text text-big">consect</span>
          <span className="text right-text text-small">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            hire the best and build your business empire или hire the best and
            turn your business into empire
          </span>
        </div>
        <span className="button">i'm in</span>
        {lookingTalent ? (
          <img src={imgGrey} alt="decoration" className="decoration" />
        ) : (
          <img src={imgBlack} alt="decoration" className="decoration" />
        )}
      </div>
      <div className="home-4">
        <img src={backgroundHome4} alt="background" />
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
      <div className="home-5">
        <h2 className="main-text">Companies</h2>
        <p className="text">
          Hirempire - a trusted recruitment partner for all your professional
          placement needs.{" "}
        </p>
        <div className="btn-wrapper">
          <button className="hire-btn">Hire Talent</button>
        </div>
        <h2 className="main-text">Road map</h2>
        <div className="road-wrapper">
          <div
            onClick={() => handleClickOnCard(1)}
            className={`card card-1 ${activeCard === 1 ? "active-card" : ""}`}
          >
            <div className="card-number">
              01 <span className="card-name">Acquaintance.</span>
            </div>
            <hr />
            <p className="card-text">
              Meeting with the client, discussing the details of the request.
              The Recruitment Department presents a prediction of possible
              results and risks. Signing the contract and filling out an
              application for the search for a candidate.
            </p>
          </div>
          <div
            onClick={() => handleClickOnCard(2)}
            className={`card card-2 ${activeCard === 2 ? "active-card" : ""}`}
          >
            <div className="card-number">
              02 <span className="card-name">Acquaintance.</span>
            </div>
            <hr />
            <p className="card-text">
              Selection of the candidates and verification of their compliance
              with the requirements of the vacancy. Pre-screen interviews with
              our recruiters. Sending CVs of the candidates with feedback from
              our recruiters. Organization of interviews, test tasks. Keeping in
              touch with candidates and providing feedback to the client.
            </p>
          </div>
          <div
            onClick={() => handleClickOnCard(3)}
            className={`card card-3 ${activeCard === 3 ? "active-card" : ""}`}
          >
            <div className="card-number">
              03 <span className="card-name">Job offer.</span>
            </div>
            <hr />
            <p className="card-text">
              Accompanying the candidate up to the first working day and during
              probation period. After the successful start of the candidate's
              work, the client pays for the company's services.
            </p>
          </div>
        </div>
      </div>
      <div className="home-6">
        <div className="page-header">
          <span>Talents</span>
          <button
            className={`${hideTalents ? "open-btn" : "rotate open-btn"}`}
            onClick={() => {
              setHideTalents(!hideTalents);
            }}
          >
            <svg
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
