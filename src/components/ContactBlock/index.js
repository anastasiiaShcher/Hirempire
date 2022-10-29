import { contactBlockImg, logoSmall } from "../../imagesContants";
import "./contact-block.scss";

export const ContactBlock = ({ isRightGrey }) => (
  <div
    className={`${
      isRightGrey ? "contact-block contact-block-grey" : "contact-block"
    }`}
  >
    <div className="left-side">
      <img src={contactBlockImg} alt="background" className="left-side-image" />
      <div className="text-block">
        <span>
          <a href="tel:++380451632611">+380 45 163 2611</a>
        </span>
        <span>
          <a href="mailto: hirempire@gmail.com">hirempire@gmail.com</a>
        </span>
        <span>38°53′51″ 77°02′11″</span>
      </div>
    </div>
    <div className="right-side">
      <h2 className="main-article">Contacts Contacts Contacts</h2>
      <div className="form">
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="femail">E-mail</label>
        <input type="email" id="femail" name="femail" />
        <label htmlFor="fphone">Phone</label>
        <input
          type="tel"
          id="fphone"
          name="fphone"
          pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <div className="btn-wrapper">
          <button className="confirm-btn">Send</button>
        </div>
      </div>
      <div className="link-block">
        <ul className="link-list">
          <li>
            <img src={logoSmall} alt="logo" />
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
