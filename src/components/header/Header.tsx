import "./Header.scss";
import logo from "../../assets/png/Chatty.png";
import { CONSTANTS } from "../../utils/constants";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav nav">
          <a
            href={`#${CONSTANTS.SECTIONS.EVENTS}`}
            className="events__nav-item nav-item"
          >
            Events
          </a>
          <NavLink className="about__nav-item nav-item" to={"/this-is-us"}>
            This is us
          </NavLink>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="header__logo" />
          </NavLink>
          <a
            href="https://www.instagram.com/english_club_gomel/"
            className="telegram__nav-item nav-item"
          >
            Instagram
          </a>
          <a
            href={`#${CONSTANTS.SECTIONS.PRICE}`}
            className="price__nav-item nav-item"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
};
