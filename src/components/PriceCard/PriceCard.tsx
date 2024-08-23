import { useContext } from "react";
import { IPriceCardInfo } from "../../types/interfaces";
import "./PriceCard.scss";
import { AppContext } from "src/context/AppContext";
import { CONSTANTS } from "../../utils/constants";
import { calendarInfo } from "../../utils/calendarInfo";
import { getUpcomingEvent } from "../../utils/getUpcomingEvent";

export const PriceCard = ({ card }: { card: IPriceCardInfo }) => {
  const { openModal, saveEventData } = useContext(AppContext);

  const openForm = () => {
    saveEventData(getUpcomingEvent(calendarInfo, card.title));
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
        Cost: <span> {` ${card.cost} BYN`}</span>
      </p>
      <button className="card__btn" onClick={openForm}>
        Sign up
      </button>
    </div>
  );
};
