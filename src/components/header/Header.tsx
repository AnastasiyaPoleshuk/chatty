import "./Header.scss";
import logo from "../../assets/png/logo.png";
import { CONSTANTS } from "../../utils/constants";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />

        <nav className="header__nav nav">
          <a
            href={`#${CONSTANTS.SECTIONS.EVENTS}`}
            className="events__nav-item nav-item"
          >
            Events
          </a>
          <a
            href={`#${CONSTANTS.SECTIONS.ABOUT}`}
            className="about__nav-item nav-item"
          >
            This is us
          </a>
          <a
            href={`#${CONSTANTS.SECTIONS.TELEGRAM}`}
            className="telegram__nav-item nav-item"
          >
            Telegram
          </a>
          <a
            href={`#${CONSTANTS.SECTIONS.PRICE}`}
            className="price__nav-item nav-item"
          >
            Price
          </a>
        </nav>
      </div>
    </header>
  );
};
