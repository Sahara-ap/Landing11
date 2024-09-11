import React from "react";

import { ReactComponent as Logo } from "assets/logo.svg";
import { Navigation } from "components/InnerLayout/components/Navigation";
import { BreakPoint } from "constants/breakpoints";

interface IMainMenuProps {
  closeMainMenu: () => void;
  isOpen: boolean;
  innerWidth: number;
}
export const MainMenu: React.FC<IMainMenuProps> = ({
  isOpen,
  closeMainMenu,
  innerWidth,
}) => {
  return (
    <>
      {innerWidth >= parseInt(BreakPoint.MobileTop) && <Logo />}
      <Navigation isOpen={isOpen} closeMainMenu={closeMainMenu} innerWidth={innerWidth}/>
    </>
  );
};
