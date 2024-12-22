import { useContext } from "react";
import { IPriceCardInfo } from "../../types/interfaces";
import "./PriceCard.scss";
import { AppContext } from "src/context/AppContext";
import { CONSTANTS } from "../../utils/constants";
import { calendarInfo } from "../../utils/calendarInfo";
import { getUpcomingEvent } from "../../utils/getUpcomingEvent";
import { error } from "../../components/Messages/Messages";

export const PriceCard = ({ card }: { card: IPriceCardInfo }) => {
  const { openModal, saveEventData } = useContext(AppContext);

  const openForm = () => {
    const upcomingEvent = getUpcomingEvent(calendarInfo, card.title);

    if (!upcomingEvent) {
      error(CONSTANTS.MESSAGES.OPEN_PRICE_MODAL_FAIL);
      return;
    }

    saveEventData(upcomingEvent);
    openModal(CONSTANTS.MODALS.CARDS__MODAL);
  };

  return (
    <div className="card">
      <h6 className="card__title">{card.title}</h6>
      <p className="card__info">{card.description}</p>
      <p className="card__info-duration">
        Duration: <span>{` ${card.duration} hour`}</span>
      </p>
      <p className="card__info-cost">
        Cost: <span> Donation</span>
      </p>
      <button className="card__btn" onClick={openForm}>
        Sign up
      </button>
    </div>
  );
};
