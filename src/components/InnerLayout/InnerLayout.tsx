import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { BurgerButton } from "./components/BurgerButton";
import { MainMenu } from "./components/MainMenu";
import { BreakPoint } from "constants/breakpoints";
import { useInnerWidth } from "hooks/useInnerWidth";

import { SocialItem } from "./components/SocialItem";
import { socialItems } from "./components/SocialItem/constants/social-items";
import S from "./_InnerLayout.module.scss";
import { PaymentItem } from "./components/PaymentItems/PaymentItems";
import { paymentItems } from "./components/PaymentItems/constants/payment-items";

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
        <div className={S.container}>
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
        </div>
      </header>
      <main className={S.main}>
        <Outlet />
      </main>
      <footer className={S.footer}>
        <div className={S.container}>
          <span className={S.copyright}>
            © 2018 «LoremIpsum.net» Все права защищены.
          </span>
          <ul className={S.paymentList}>
            {paymentItems.map((item) => (
              <PaymentItem key={item.src} {...item} />
            ))}
          </ul>
          <ul className={S.socialList}>
            {socialItems.map((item) => (
              <SocialItem key={item.src} {...item} />
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};
