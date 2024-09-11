import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { BurgerButton } from "./components/BurgerButton";
import { MainMenu } from "./components/MainMenu";
import { BreakPoint } from "constants/breakpoints";
import { useInnerWidth } from "hooks/useInnerWidth";

import S from "./_InnerLayout.module.scss";

export const InnerLayout: React.FC = () => {
  const [isMainMenuOpened, setIsMainMenuOpened] = useState(false);

  const handleMainMenuOpen = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsMainMenuOpened(true);
  };

  const handleMainMenuClosed = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsMainMenuOpened(false);
  };

  const closeMainMenu = () => {
    setIsMainMenuOpened(false);
  };

  const { innerWidth } = useInnerWidth();

  useEffect(() => {
    if (innerWidth >= parseInt(BreakPoint.MobileTop)) {
      setIsMainMenuOpened(false);
    }
  }, [innerWidth]);

  return (
    <div className={S.wrapper}>
      <header className={S.header}>
        <BurgerButton
          isMainMenuOpened={isMainMenuOpened}
          handleMainMenuOpen={handleMainMenuOpen}
          handleMainMenuClosed={handleMainMenuClosed}
        />
        <MainMenu
          closeMainMenu={closeMainMenu}
          isOpen={isMainMenuOpened}
          innerWidth={innerWidth}
        />
      </header>
      <main className={S.main}>
        <Outlet />
      </main>
      <footer className={S.footer}></footer>
    </div>
  );
};
