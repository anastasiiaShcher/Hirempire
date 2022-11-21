import { useState, useEffect } from "react";
import { useWidthData } from "../../hooks";
import "./home-companies-block.scss";

export const HomeCompaniesBlock = () => {
  const { isMobile } = useWidthData();

  const [activeCard, setActiveCard] = useState(isMobile ? 0 : 1);
  const [useInterval, setUseInterval] = useState(true);

  const handleClickOnCard = (cardNumber) => {
    if (isMobile) return;
    setActiveCard(cardNumber);
    setUseInterval(false);
  };

  useEffect(() => {
    if (isMobile) return;

    if (useInterval) {
      const interval = setInterval(() => {
        setActiveCard(activeCard === 3 ? 1 : activeCard + 1);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [useInterval, activeCard]);

  return (
    <div className="home-companies">
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
            Meeting with the client, discussing the details of the request. The
            Recruitment Department presents a prediction of possible results and
            risks. Signing the contract and filling out an application for the
            search for a candidate.
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
            with the requirements of the vacancy. Pre-screen interviews with our
            recruiters. Sending CVs of the candidates with feedback from our
            recruiters. Organization of interviews, test tasks. Keeping in touch
            with candidates and providing feedback to the client.
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
  );
};
