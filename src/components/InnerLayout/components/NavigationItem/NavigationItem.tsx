import React from 'react';
import { Link } from 'react-router-dom';

import S from './_NavigationItem.module.scss';

interface INavigationItemProps {
  linkTo: string;
  text: string;
  onClick: (text: string) => void;
  isCurrent: boolean;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  linkTo,
  text,
  onClick,
  isCurrent,
}) => {
  return (
    <>
        <li className={`${S.navListItem} ${isCurrent ? S.active : ''}`}>
          <Link className={S.navListLink} to={linkTo} onClick={() => onClick(text)}>
            {text}
          </Link>
        </li>
    </>
  );
};
