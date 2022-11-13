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
      <button className="header__burger-wrapper">
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.15039 10.2502C6.15039 9.7065 6.36637 9.18508 6.75082 8.80063C7.13527 8.41618 7.6567 8.2002 8.20039 8.2002H32.8004C33.3441 8.2002 33.8655 8.41618 34.25 8.80063C34.6344 9.18508 34.8504 9.7065 34.8504 10.2502C34.8504 10.7939 34.6344 11.3153 34.25 11.6998C33.8655 12.0842 33.3441 12.3002 32.8004 12.3002H8.20039C7.6567 12.3002 7.13527 12.0842 6.75082 11.6998C6.36637 11.3153 6.15039 10.7939 6.15039 10.2502ZM6.15039 20.5002C6.15039 19.9565 6.36637 19.4351 6.75082 19.0506C7.13527 18.6662 7.6567 18.4502 8.20039 18.4502H32.8004C33.3441 18.4502 33.8655 18.6662 34.25 19.0506C34.6344 19.4351 34.8504 19.9565 34.8504 20.5002C34.8504 21.0439 34.6344 21.5653 34.25 21.9498C33.8655 22.3342 33.3441 22.5502 32.8004 22.5502H8.20039C7.6567 22.5502 7.13527 22.3342 6.75082 21.9498C6.36637 21.5653 6.15039 21.0439 6.15039 20.5002ZM18.4504 30.7502C18.4504 30.2065 18.6664 29.6851 19.0508 29.3006C19.4353 28.9162 19.9567 28.7002 20.5004 28.7002H32.8004C33.3441 28.7002 33.8655 28.9162 34.25 29.3006C34.6344 29.6851 34.8504 30.2065 34.8504 30.7502C34.8504 31.2939 34.6344 31.8153 34.25 32.1998C33.8655 32.5842 33.3441 32.8002 32.8004 32.8002H20.5004C19.9567 32.8002 19.4353 32.5842 19.0508 32.1998C18.6664 31.8153 18.4504 31.2939 18.4504 30.7502Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};
