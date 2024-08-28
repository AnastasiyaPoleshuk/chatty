import { useContext } from "react";
import { Modal } from "antd";

import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import { TelegramSection } from "../../components/TelegramSection/TelegramSection";
import { PriceSection } from "../../components/PriceSection/PriceSection";
import { StatisticsSection } from "../../components/StatisticsSection/StatisticsSection";
import { CalendarForm } from "../../components/CalendarForm/CalendarForm";
import { CardForm } from "../../components/CardForm/CardForm";
import { SignUpEventForm } from "../../components/SignUpEventForm/SignUpEventForm";
import { JoinTeamForm } from "../../components/JoinTeamForm/JoinTeamForm";

import { CONSTANTS } from "../../utils/constants";
import { AppContext } from "../../context/AppContext";

import "./Main.scss";

export const Main = () => {
  const { calendarModal, cardsModal, signUpModal, joinTeamModal, closeModal } =
    useContext(AppContext);

  return (
    <>
      <main className="main">
        <WelcomeSection />
        <EventsSection />
        <StatisticsSection />
        <AboutSection />
        <TelegramSection />
        <PriceSection />
      </main>

      <Modal
        open={calendarModal}
        footer={null}
        closable={false}
        className="modal-window"
        onCancel={() => {
          closeModal(CONSTANTS.MODALS.CALENDAR__MODAL);
        }}
      >
        <CalendarForm />
      </Modal>

      <Modal
        open={signUpModal}
        footer={null}
        closable={false}
        className="modal-window"
        onCancel={() => {
          closeModal(CONSTANTS.MODALS.SIGN_UP__MODAL);
        }}
      >
        <SignUpEventForm />
      </Modal>

      <Modal
        open={joinTeamModal}
        footer={null}
        closable={false}
        className="modal-window"
        onCancel={() => {
          closeModal(CONSTANTS.MODALS.JOIN_TEAM__MODAL);
        }}
      >
        <JoinTeamForm />
      </Modal>

      <Modal
        open={cardsModal}
        footer={null}
        closable={false}
        className="modal-window"
        onCancel={() => {
          closeModal(CONSTANTS.MODALS.CARDS__MODAL);
        }}
      >
        <CardForm />
      </Modal>
    </>
  );
};
