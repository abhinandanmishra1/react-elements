import React, { cloneElement } from "react";
import "./style.css";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: "fast" | "slow"; // in seconds
}

export const HorizontalScroller = ({
  children,
  direction,
  speed,
}: HorizontalScrollerProps) => {
  if (!Array.isArray(children)) return children;

  return (
    <div className="h-scroller max-w-max" data-speed={speed} data-direction={direction} data-animated={true}>
      <div className="h-scroller__inner">
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
