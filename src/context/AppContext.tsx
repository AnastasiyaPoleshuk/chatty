/* eslint-disable no-unused-vars */
import React, { createContext, useMemo, useState } from "react";
import { CONSTANTS } from "../utils/constants";
import { ICalendarInfo } from "../types/interfaces";

interface IAppContext {
  calendarModal: boolean;
  cardsModal: boolean;
  signUpModal: boolean;
  joinTeamModal: boolean;
  eventData: ICalendarInfo;
  openModal: (type: string) => void;
  closeModal: (type: string) => void;
  saveEventData: (event: ICalendarInfo) => void;
}

export const AppContext = createContext<IAppContext>({
  calendarModal: false,
  cardsModal: false,
  signUpModal: false,
  joinTeamModal: false,
  eventData: {
    id: "",
    name: "",
    date: "",
    color: "",
  },
  openModal: () => {},
  closeModal: () => {},
  saveEventData: () => {},
});

export const AppState = ({ children }: { children: React.ReactNode }) => {
  const [calendarModal, setCalendarModal] = useState(false);
  const [cardsModal, setCardsModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [joinTeamModal, setJoinTeamModal] = useState(false);
  const [eventData, setEventData] = useState({
    id: "",
    name: "",
    date: "",
    color: "",
  });

  const openModal = (type: string) => {
    switch (type) {
      case CONSTANTS.MODALS.CALENDAR__MODAL:
        setCalendarModal(true);
        break;
      case CONSTANTS.MODALS.CARDS__MODAL:
        setCardsModal(true);
        break;
      case CONSTANTS.MODALS.SIGN_UP__MODAL:
        setSignUpModal(true);
        break;
      case CONSTANTS.MODALS.JOIN_TEAM__MODAL:
        setJoinTeamModal(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (type: string) => {
    switch (type) {
      case CONSTANTS.MODALS.CALENDAR__MODAL:
        setCalendarModal(false);
        break;
      case CONSTANTS.MODALS.CARDS__MODAL:
        setCardsModal(false);
        break;
      case CONSTANTS.MODALS.SIGN_UP__MODAL:
        setSignUpModal(false);
        break;
      case CONSTANTS.MODALS.JOIN_TEAM__MODAL:
        setJoinTeamModal(false);
        break;
      default:
        break;
    }
  };

  const saveEventData = (event: ICalendarInfo) => {
    setEventData(event);
  };

  const contextValue = useMemo(
    () => ({
      calendarModal,
      cardsModal,
      signUpModal,
      joinTeamModal,
      eventData,
      openModal,
      closeModal,
      saveEventData,
    }),
    [calendarModal, cardsModal, signUpModal, joinTeamModal, eventData],
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
