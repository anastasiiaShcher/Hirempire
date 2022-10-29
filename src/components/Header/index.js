import { Link } from "react-router-dom";

import "./header.scss";
import { logo } from "../../imagesContants";

export const Header = ({ isBlack }) => {
  return (
    <div className={`${isBlack ? "header header-black" : "header"}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__list-item">
          <Link to="/company">companies</Link>
        </li>
        <li className="header__list-item">
          <Link to="/candidate">candidates</Link>
        </li>
        <li className="header__list-item">
          <a link="">account</a>
        </li>
      </ul>
    </div>
  );
};
