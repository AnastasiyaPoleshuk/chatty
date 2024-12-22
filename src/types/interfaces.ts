export interface IPriceCardInfo {
  id: string;
  title: string;
  description: string;
  duration: number;
}

export enum EventsType {
  games = "Board games",
  party = "English party",
  speakOut = "Time to speak out",
}

export interface ICalendarInfo {
  id: string;
  name: string;
  type: EventsType;
  date: string;
  color: string;
}
