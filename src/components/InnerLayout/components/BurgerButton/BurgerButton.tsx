import React from 'react';

import { ReactComponent as MenuBurger } from 'assets/menu-burger.svg';
import { ReactComponent as MenuCross } from 'assets/menu-cross.svg';

import S from './_BurgerButton.module.scss';

export interface IBurgerButtonProps {
  isMainMenuOpened: boolean;
  handleMainMenuOpen: (event: React.MouseEvent) => void;
  handleMainMenuClosed: (event: React.MouseEvent) => void;
}
export const BurgerButton: React.FC<IBurgerButtonProps> = ({
  isMainMenuOpened,
  handleMainMenuOpen,
  handleMainMenuClosed,
}) => {
  return (
    <button className={S.button}
        onClick={isMainMenuOpened ? handleMainMenuClosed : handleMainMenuOpen}
    >
      {isMainMenuOpened ? <MenuCross /> : <MenuBurger />}
    </button>
  );
};
