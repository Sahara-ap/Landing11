import React, { useRef } from "react";

import S from "./_InputRange.module.scss";

export const InputRange: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const handleThumbMouseDown = function (event: React.MouseEvent) {
    event.preventDefault();
    let shiftX = 0;

    if (thumbRef.current) {
      shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event: MouseEvent) {
      let newLeft = 0;
      if (sliderRef.current) {
        newLeft =
          event.clientX -
          shiftX -
          sliderRef.current.getBoundingClientRect().left;
      }

      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = 0;
      if (sliderRef.current && thumbRef.current) {
        rightEdge =
          sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbRef.current.style.left = newLeft + "px";
      }
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  };

  const handleDragstart = () => {
    return false;
  };

  return (
    <div className={S.wrapper}>
      <div className={S.slider} ref={sliderRef}>
        <div
          className={S.thumb}
          onMouseDown={handleThumbMouseDown}
          onDragStart={handleDragstart}
          ref={thumbRef}
        ></div>
      </div>
    </div>
  );
};
