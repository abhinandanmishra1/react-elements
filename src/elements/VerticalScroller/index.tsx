import React, { cloneElement } from "react";
import "./style.css";

interface VerticalScrollerProps {
  children: React.ReactNode;
  direction: "up" | "down";
  speed: "fast" | "slow"; // in seconds
  height: number | string;
}

export const VerticalScroller = ({
  children,
  direction,
  speed,
  height
}: VerticalScrollerProps) => {
  if (!Array.isArray(children)) return children;

  return (
    <div style={{height}} className="v-scroller max-w-max" data-speed={speed} data-direction={direction} data-animated={true}>
      <div className="v-scroller__inner">
        {children}
        <>
          {children.map((child) =>
            cloneElement(child, {
              key: crypto.randomUUID(),
            })
          )}
        </>
      </div>
    </div>
  );
};
