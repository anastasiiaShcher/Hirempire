import { useState } from "react";
import { Header } from "../../components/Header";
import { ScrollButton } from "../../components/ScrollBtn";
import backgroundHome2 from "../../assets/images/home-2.png";
import imgBlack from "../../assets/images/home-switcher-black.png";
import imgGrey from "../../assets/images/home-switcher-grey.png";
import "./home.scss";

export const Home = () => {
  const [lookingTalent, setLookingTalent] = useState(true);

  return (
    <>
      <div className="home-1">
        <Header />
        <div className="home-bottom">
          <ScrollButton />
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
      <div className="home-2">
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
          <img src={imgGrey} alt="decoration" />
        ) : (
          <img src={imgBlack} alt="decoration" />
        )}
      </div>
    </>
  );
};
