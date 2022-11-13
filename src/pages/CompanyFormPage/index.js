import { useState } from "react";
import { Header } from "../../components/Header";
import "./company-form.scss";

export const CompanyFormPage = () => {
  const [isCheckedRules, setIsCheckedRules] = useState(false);

  return (
    <div className="candidates-form-wrapper">
      <Header isBlack={true} />
      <div className="candidates-form">
        <div className="title-wrapper">
          <p className="main-text">Let’s talk!</p>
          <p className="text">
            Looking to talk to an expert for your workforce challenges? Fill out
            some information below, and we’ll reach out to you within one
            business day.
          </p>
        </div>
        <div className="form">
          <div>
            <span>Hey, my name is</span>
            <input
              type="text"
              id="name"
              className="form-name"
              placeholder="Type Here"
            />
            <span>and I'm looking for</span>
            {/* TODO SELECT */}
            <input
              type="text"
              id="select"
              className="form-name"
              placeholder="Type Here"
            />
          </div>
          <div>
            <span>My company name is</span>
            <input
              type="text"
              id="company-name"
              className="form-company-name"
              placeholder="Type Here"
            />
            <span> and we`r located in</span>
            <input
              type="text"
              id="location"
              className="form-location"
              placeholder="Type Here"
            />
          </div>
          <div>
            <span>And for your convenience our zip code is</span>
            <input
              type="text"
              id="zip-code"
              className="form-zip-code"
              placeholder="Your Zip Code"
            />
            <span>.</span>
          </div>
          <div className="form-new-line">
            <span>I have any details of request. It`s</span>
            <textarea id="details" rows="3" placeholder="Type Here" />
          </div>
          <div>
            <span>Get in touch with me</span>
            <input
              type="email"
              id="email"
              className="form-email"
              placeholder="Type Here"
            />
            <span>!</span>
          </div>
        </div>
      </div>
      <div className="candidates-form-bottom">
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={() => {
              setIsCheckedRules(!isCheckedRules);
            }}
          />
          <span class="checkmark"></span>
          <span>
            By submitting your email you agree that Kelly may send you
            promotional email messages, updates, and other marketing messages.
            You understand and agree that Kelly may use your information in
            accordance with its Privacy Policy.
          </span>
        </label>
        <button>send enquiry</button>
      </div>
      <div className="candidates-info">
        <span className="horizontal-line" />
        <div className="info-list">
          <div className="info-item">
            <p>1,000,000</p>
            <span>
              Workers engaged to connect you to the right talent and insights
            </span>
          </div>
          <div className="info-item">
            <p>250+</p>
            <span>
              Countries in our supply chain to ensure access to skills, anywhere
              in the world
            </span>
          </div>
          <div className="info-item">
            <p>365</p>
            <span>
              Workers engaged to connect you to the right talent and insights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
