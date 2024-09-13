import React, { useRef, useState } from "react";
import cn from "classnames";
import { ReactComponent as ArrowDown } from "assets/carret.svg";
import { useCloseByClick } from "hooks/useCloseByClick";

import S from "./_Select.module.scss";

export interface ISelectProps {
  items: ISelectItem[];
  currentValue: string;
  isDisabled?: boolean;
  className?: string;
  onChange: (newValue: string) => void;
}

export interface ISelectItem {
  text: string;
  value: string;
}

export const Select: React.FC<ISelectProps> = ({
  items,
  currentValue,
  isDisabled = false,
  onChange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const selectButtonRef = useRef<HTMLButtonElement>(null);

  const activeItem = items.find((item) => item.text === currentValue);
  console.log('activeItem', activeItem)
  console.log('currentValue', currentValue)

  const handleSelectButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpened((prev) => !prev);
  };

  const handleItemClick = (newValue: string) => {
    if (newValue !== currentValue) {
      onChange(newValue);
    }
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  useCloseByClick({ isShown: isOpened, cb: closeMenu });

  return (
    <div className={S.selectContainer}>
      <button
        className={cn(S.selectButton, { [S.selectButtonActive]: isOpened })}
        ref={selectButtonRef}
        onClick={handleSelectButtonClick}
        disabled={isDisabled}
        type="button"
      >
        {activeItem?.text && (
          <span className={S.selectButtonText}>{activeItem?.text}</span>
        )}
        <ArrowDown />
      </button>

      <div className={cn(S.selectMenu, { [S.selectMenuOpened]: isOpened })}>
        <ul className={cn(S.MenuList, { [S.menuListOpened]: isOpened })}>
          {items.map(({ text, value }) => (
            <li className={S.menuItem} key={value}>
              <button
                className={S.menuButton}
                type="button"
                onClick={() => handleItemClick(value)}
                tabIndex={isOpened ? 0 : -1}
              >
                {text && (
                  <span
                    className={cn(S.menuButtonText, {
                      [S.menuButtonTextActive]: value === currentValue,
                      [S.menuButtonTextClosed]: !isOpened,
                    })}
                  >
                    {text}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
