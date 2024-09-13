import React from "react";
import { Link } from "react-router-dom";

import { IPaymentItem } from "./constants/payment-items";
import S from "./_PaymentItems.module.scss";

export const PaymentItem: React.FC<IPaymentItem> = ({ 
    name,
    src,
    text,
    linkTo,
}) => {
  return (
    <li>
      <Link className={S.paymentLink} to={linkTo}>
        <img src={src} alt={name} />
        <span>{text}</span>
      </Link>
    </li>
  );
};
