import React from "react";
import { ReactComponent as SearchPic } from "assets/search.svg";
import { ReactComponent as PercentPic } from "assets/percent.svg";
import { ReactComponent as InvoicePic } from "assets/invoice.svg";
import { ReactComponent as SendPic } from "assets/send.svg";
import { ReactComponent as MoneyPic } from "assets/money.svg";

export const Order: React.FC = () => {
  return (
    <section className="order">
      <div className="order__container">
        <h2 className="order__title">
          оформление<span>&nbsp;заказа</span>
        </h2>
        <div className="order__scheme">
          <h3 className="order__scheme-title">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </h3>
          <ul className="order__scheme-path">
            <li className="order__path-item">
              <div>
                <SearchPic />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="order__dots-wrapper">
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
              </div>
            </li>
            <li className="order__path-item">
              <div>
                <PercentPic />
                <span>Сonsecteturadipiscing elit</span>
              </div>
              <div className="order__dots-wrapper">
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
              </div>
            </li>
            <li className="order__path-item">
              <div>
                <InvoicePic />
                <span>Sed do eiusmod tempor</span>
              </div>
              <div className="order__dots-wrapper">
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
              </div>
            </li>
            <li className="order__path-item">
              <div>
                <SendPic />
                <span>Esse cillum dolore eu fugiat</span>
              </div>
              <div className="order__dots-wrapper">
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
              </div>
            </li>
            <li className="order__path-item">
              <div>
                <MoneyPic />
                <span>Excepteur sint occaecat cupidatat non proident</span>
              </div>
              <div className="order__dots-wrapper">
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
                <span className="order__dots"></span>
              </div>
            </li>
          </ul>
        </div>
        <div className="order__form">
          <form></form>
        </div>
      </div>
    </section>
  );
};
