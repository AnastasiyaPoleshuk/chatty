import { WelcomeSection } from "../../components/WelcomeSection/WelcomeSection";
import { EventsSection } from "../../components/EventsSection/EventsSection";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="main">
      <WelcomeSection />
      <EventsSection />
      <AboutSection />
    </main>
  );
};
