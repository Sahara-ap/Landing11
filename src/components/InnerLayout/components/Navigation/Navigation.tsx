import React, { useState } from 'react';

import { BreakPoint } from 'constants/breakpoints';
import { navItems } from './constants/nav-items';
import { NavigationItem } from 'components/InnerLayout/components/NavigationItem';
import { useCloseByClick } from 'hooks/useCloseByClick';

import S from './_Navigation.module.scss';

interface INavigationProps {
  closeMainMenu: () => void;
  isOpen: boolean;
  innerWidth: number
}
export const Navigation: React.FC<INavigationProps> = ({closeMainMenu, isOpen, innerWidth}) => {
  const [current, setCurrent] = useState('бизнес')

  const listClassName = 
    isOpen && innerWidth <= parseInt(BreakPoint.MobileTop)
      ? S.navListVertical
      : S.navListHorizontal


     const  handleLinkClick = (text: string) => {
      setCurrent(text);
     }
  useCloseByClick({isShown:isOpen, cb:closeMainMenu});

  return (
    <nav className={S.navWrapper}>
      <ul className={listClassName}>
        {navItems.map(({linkTo, text}) => (
          <NavigationItem 
            key={text}
            linkTo={linkTo}
            text={text}
            onClick = {handleLinkClick}
            isCurrent={current === text}
           />
        ))}
      </ul>
    </nav>
  );
};
