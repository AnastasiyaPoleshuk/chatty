import { ArrowRightOutlined } from "@ant-design/icons";
import "./TelegramSection.scss";

export const TelegramSection = () => {
  return (
    <section className="telegram__section">
      <div className="telegram__container">
        <h2 className="telegram__title">Join us on Telegram</h2>
        <p className="telegram__sub-title">
          to keep up with new events and communicate with club members
        </p>

        <div className="telegram__chat-box">
          <p className="telegram__chat-message">
            Chatty, what is special about you?
          </p>
          <p className="telegram__chat-message">
            Well, in our club you will master the language naturally.
          </p>
          <p className="telegram__chat-message">Well, anything else?</p>
          <p className="telegram__chat-message">
            The activities in our club are an effective addition to any language
            learning course. Here you put into practice your English language
            knowledge, improve your communication skills and just have fun.
          </p>
        </div>

        <a href="https://t.me/+Goey5vs-Qgc5MDgy" className="telegram__button">
          <span>Explore events</span>
          <ArrowRightOutlined
            style={{
              color: "#d738ff",
              background: "#fff",
              padding: 10,
              borderRadius: "50%",
            }}
          />
        </a>
      </div>
    </section>
  );
};
