import { IPriceCardInfo } from "../../types/interfaces";
import "./PriceCard.scss";

export const PriceCard = ({ card }: { card: IPriceCardInfo }) => {
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
      <button className="card__btn">Sign up</button>
    </div>
  );
};
