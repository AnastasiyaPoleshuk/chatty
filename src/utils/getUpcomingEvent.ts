import { ICalendarInfo } from "../types/interfaces";
import dayjs from "dayjs";

export const getUpcomingEvent = (
  eventsData: ICalendarInfo[],
  eventType: string,
) => {
  const currentTypeEvents = eventsData.filter(
    (item) => item.name === eventType,
  );
  const futureEvents = currentTypeEvents.filter(
    (item) => +dayjs(item.date) > +dayjs(),
  );

  return futureEvents.sort((a, b) => {
    return +dayjs(a.date) - +dayjs(b.date);
  })[0];
};
