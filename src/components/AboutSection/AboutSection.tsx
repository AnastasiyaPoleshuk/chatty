import { ArrowDownOutlined } from "@ant-design/icons";

import "./AboutSection.scss";

export const AboutSection = () => {
  return (
    <section className="about__section">
      <div className="about__container">
        <div className="about__info-block">
          <h3 className="about__info-block__title">
            What do you need to participate in our events?
          </h3>
          <p className="about__info-text">A2 level and be willing to speak </p>
          <button className="about__info-button">
            <span>Sign up for an event</span>
            <ArrowDownOutlined
              style={{
                color: "#d7611f",
                background: "#fff",
                padding: 15,
                borderRadius: "50%",
              }}
            />
          </button>
        </div>
        <div className="about__info-block">
          <h3 className="about__info-block__title">
            Would you like to join Chatty project team?
          </h3>
          <p className="about__info-text">
            We are looking for a contect creator, a video-maker, and a project
            manager to coordinate offline clubs in other cities
          </p>
          <button className="about__info-button">
            <span>Investigate the opportunity</span>
            <ArrowDownOutlined
              style={{
                color: "#1f69d7",
                background: "#fff",
                padding: 15,
                borderRadius: "50%",
              }}
            />
          </button>
        </div>
      </div>
      <i className="about__line"></i>
    </section>
  );
};
