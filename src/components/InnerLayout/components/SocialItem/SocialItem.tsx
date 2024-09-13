import React from "react";
import { Link } from "react-router-dom";

import { ISocialItem } from "./constants/social-items";
import S from "./_SocialItem.module.scss";

export const SocialItem: React.FC<ISocialItem> = ({ 
    name,
    src,
    text,
    linkTo,
}) => {
  return (
    <li className={S.wrapper}>
      <Link className={S.socialLink} to={linkTo}>
        <img src={src} alt={name} />
        <span>{text}</span>
      </Link>
    </li>
  );
};
