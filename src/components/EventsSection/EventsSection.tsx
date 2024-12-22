import { useContext } from "react";

import { Calendar } from "antd";
import locale from "antd/es/locale/en_US";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

import { CONSTANTS } from "../../utils/constants";
import { calendarInfo } from "../../utils/calendarInfo";
import { ICalendarInfo } from "../../types/interfaces";
import { AppContext } from "../../context/AppContext";

import "./EventsSection.scss";
import { warning, error } from "../Messages/Messages";

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
  const { openModal, saveEventData } = useContext(AppContext);

  const getCurrentEvent = (
    currentDate: Dayjs,
    allEventsList: ICalendarInfo[],
  ) => {
    let currentEvent: ICalendarInfo | null = null;

    for (let i = 0; i < allEventsList.length; i++) {
      if (allEventsList[i].date === dayjs(currentDate).format("YYYY-MM-DD")) {
        currentEvent = allEventsList[i];
      }
    }

    return currentEvent;
  };

  const dateCellRender = (value: Dayjs) => {
    const currentEvents = getCurrentEvent(value, calendarInfo);

    return currentEvents ? (
      <div
        className="cell-filled__inner"
        style={{ background: `${currentEvents.color}` }}
      >
        {currentEvents?.name}
      </div>
    ) : null;
  };

  const onSelect = (date: Dayjs) => {
    const event = getCurrentEvent(date, calendarInfo);

    if (!event) {
      warning(CONSTANTS.MESSAGES.CALENDAR_MODAL_EMPTY_CELL);
      return;
    }

    if (dayjs(event.date) < dayjs()) {
      error(CONSTANTS.MESSAGES.CALENDAR_MODAL_PAST_CELL);
      return;
    }

    saveEventData(event);
    openModal(CONSTANTS.MODALS.CALENDAR__MODAL);
  };

  return (
    <>
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
            cellRender={(value: Dayjs) => dateCellRender(value)}
            onSelect={onSelect}
          />
          <p className="events__description">
            To sign up, click on the event card and fill in the form that opens
          </p>
        </div>
        <i className="events__ribbons"></i>
      </section>
    </>
  );
};
