import { Calendar } from "antd";
import locale from "antd/es/locale/en_US";
import { CONSTANTS } from "../../utils/constants";

import "./EventsSection.scss";

const calendarLocale = {
  lang: {
    ...locale.Calendar?.lang,
    shortWeekDays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
};

export const EventsSection = () => {
  return (
    <section className="events__section" id={CONSTANTS.SECTIONS.EVENTS}>
      <div className="events__container">
        <h2 className="events__title">Upcoming events in September</h2>
        <p className="events__sub-title">
          All English Club events are only by appointment
        </p>
        <Calendar
          style={{
            width: 950,
          }}
          locale={calendarLocale}
        />
        <p className="events__description">
          To sign up, click on the event card and fill in the form that opens
        </p>
      </div>
      <i className="events__ribbons"></i>
    </section>
  );
};
