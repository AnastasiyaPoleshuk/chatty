import { ArrowDownOutlined } from "@ant-design/icons";

import { CONSTANTS } from "../../utils/constants";
import picOne from "../../assets/png/welcome-section-img-1.png";
import picTwo from "../../assets/png/welcome-section-img-2.png";
import picThree from "../../assets/png/welcome-section-img-3.png";
import picFour from "../../assets/png/welcome-section-img-4.png";
import "./WelcomeSection.scss";

export const WelcomeSection = () => {
  return (
    <section className="welcome__section">
      <div className="welcome__container">
        <p className="welcome__description">
          Community where you boost your English speaking skills
        </p>
        <h1 className="welcome__title">English speaking club in Gomel</h1>
        <p className="welcome__sub-title">
          Being fluent in English isn't a hard nut to crack <br /> any more.
        </p>
        {/* <a href={CONSTANTS.SECTIONS.EVENTS} className="welcome__button"> */}
        <button className="welcome__button">
          <span>Explore events</span>
          <ArrowDownOutlined
            style={{
              color: "#d7611f",
              background: "#fff",
              padding: 15,
              borderRadius: "50%",
            }}
          />
        </button>
        <div className="welcome-pic__box">
          <img src={picOne} alt="welcome pic" className="welcome-pic__item" />
          <img src={picTwo} alt="welcome pic" className="welcome-pic__item" />
          <img src={picThree} alt="welcome pic" className="welcome-pic__item" />
          <img src={picFour} alt="welcome pic" className="welcome-pic__item" />
        </div>
      </div>
      <i className="welcome__line"></i>
    </section>
  );
};
