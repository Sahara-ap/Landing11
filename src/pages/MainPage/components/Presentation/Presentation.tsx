import React from "react";

export const Presentation: React.FC = () => {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <h2 className="presentation__title">
          <span>Lorem ipsum</span> dolor sit<br/>amet consectetur{" "}
          <span>adipiscing</span>
        </h2>
        <div className="presentation__list-wrapper">
          <h3 className="presentation__list-title">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h3>
          <ul className="presentation__list">
            <li className="presentation__item">Totam rem aperiam eaque ipsa</li>
            <li className="presentation__item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li className="presentation__item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
        </div>
        <div className="presentation__button-wrapper">
          <button className="presentation__button button button--blue">заказать</button>
          <button className="presentation__button button">подробнее</button>
        </div>
      </div>
    </section>
  );
};
