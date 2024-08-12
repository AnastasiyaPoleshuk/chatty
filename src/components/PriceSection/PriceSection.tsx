import { PriceCard } from "../PriceCard/PriceCard";
import { PriceCardInfo } from "../../utils/PriceCardInfo";
import "./PriceSection.scss";

export const PriceSection = () => {
  return (
    <section className="price__section">
      <div className="prise__container">
        <h2 className="price__title">Pricing</h2>

        <div className="price__cards-box">
          {PriceCardInfo.map((cardInfo) => (
            <PriceCard key={cardInfo.id} card={cardInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};
