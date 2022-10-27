import { useRef } from "react";

import { Header } from "../../components/Header";
import { SearchIcon } from "../../components/SearchIcon";
import { ScrollButton } from "../../components/ScrollBtn";
import { ContactBlock } from "../../components/ContactBlock";

import "./candidates.scss";

export const Candidates = () => {
  const ref = useRef(null);

  return (
    <>
      <div className="main-page">
        <Header isBlack={true} />
        <h1 className="main-title">Little strokes fell great oaks</h1>
        <div className="main-page-bottom-part">
          <p className="text">find a dream job</p>
          <ScrollButton refVariable={ref} />
        </div>
      </div>
      <div ref={ref} className="find-job-page">
        <p className="background-text background-text-top">
          Lorem ipsum dolor sit ametLorem
        </p>
        <p className="background-text background-text-bottom">
          Lorem ipsum dolor sit ametLorem
        </p>
        <div className="hire-form-wrapper">
          <div className="hire-form">
            <p className="title">Find Your Next Job</p>
            <div className="input-wrapper">
              <label className="input-item">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Job Tittle, Skills or Keywords"
                />
              </label>
              <div className="vertical-line-wrapper">
                <span className="vertical-line"></span>
              </div>
              <label className="input-item">
                <SearchIcon />
                <input type="text" placeholder="City, State, Zip Code" />
              </label>
            </div>
            <div className="button-wrapper">
              <button>See how we can help you get hired</button>
            </div>
          </div>
        </div>
      </div>
      <div className="candidates-text-block">
        <p className="main-text">The early</p>
        <p className="main-text">bird</p>
        <p className="main-text">catches</p>
        <p className="main-text main-text-right">the worm</p>
        <a className="hire-link" href="#">
          more hire option
        </a>
        <p className="additional-text additional-text-first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac cras
          ultrices posuere amet, enim cursus. Donec elit dignissim vitae
          facilisi magna. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.{" "}
        </p>
        <p className="additional-text additional-text-second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac cras
          ultrices posuere amet, enim cursus. onec elit dignissim vitae facilisi
          magna.
        </p>
      </div>
      <ContactBlock isRightGrey={true}/>
    </>
  );
};
