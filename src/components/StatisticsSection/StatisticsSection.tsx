import "./StatisticsSection.scss";

export const StatisticsSection = () => {
  return (
    <section className="statistics__section">
      <div className="statistics__container">
        <h2 className="statistics__title">
          In 2024 Chatty has pleased its members with:
        </h2>
        <div className="statistics__wrapp">
          <div className="statistics__item item">
            <h3 className="statistics__item-title">Events</h3>
            <p className="statistics__item-info">19</p>
          </div>
          <div className="statistics__item item">
            <h3 className="statistics__item-title">New guests</h3>
            <p className="statistics__item-info">47</p>
          </div>
          <div className="statistics__item item">
            <h3 className="statistics__item-title">Event formats</h3>
            <p className="statistics__item-info">5</p>
          </div>
        </div>
      </div>
    </section>
  );
};
