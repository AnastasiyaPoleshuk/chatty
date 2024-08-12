import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import { TelegramSection } from "../../components/TelegramSection/TelegramSection";
import { PriceSection } from "../../components/PriceSection/PriceSection";
import { StatisticsSection } from "../../components/StatisticsSection/StatisticsSection";

import "./Main.scss";

export const Main = () => {
  return (
    <main className="main">
      <WelcomeSection />
      <EventsSection />
      <StatisticsSection />
      <AboutSection />
      <TelegramSection />
      <PriceSection />
    </main>
  );
};
