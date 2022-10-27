import "./header.scss";
import { logo } from "../../imagesContants";

export const Header = ({ isBlack }) => {
  return (
    <div className={`${isBlack ? "header header-black" : "header"}`}>
      <a link="#" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <ul className="header__list">
        <li className="header__list-item">
          <a link="">Home</a>
        </li>
        <li className="header__list-item">
          <a link="">companies</a>
        </li>
        <li className="header__list-item">
          <a link="">candidates</a>
        </li>
        <li className="header__list-item">
          <a link="">account</a>
        </li>
      </ul>
    </div>
  );
};
