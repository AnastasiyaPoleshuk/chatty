import { useContext } from "react";

import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import { TelegramSection } from "../../components/TelegramSection/TelegramSection";
import { PriceSection } from "../../components/PriceSection/PriceSection";
import { StatisticsSection } from "../../components/StatisticsSection/StatisticsSection";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { CalendarForm } from "../../components/CalendarForm/CalendarForm";

import { CONSTANTS } from "../../utils/constants";
import { AppContext } from "../../context/AppContext";

import "./Main.scss";

export const Main = () => {
  const { calendarModal } = useContext(AppContext);

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
      {calendarModal && (
        <ModalWindow type={CONSTANTS.MODALS.CALENDAR__MODAL}>
          <CalendarForm />
        </ModalWindow>
      )}
    </>
  );
};
