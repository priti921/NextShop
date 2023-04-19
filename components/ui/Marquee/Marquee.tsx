import React, { FC, ReactNode } from "react";
import style from "./Marquee.module.css";
import FastMarquee from "react-fast-marquee";
import cn from "classnames";

type PropType = {
  children: ReactNode[];
  variant?: "primary" | "secondary";
};

//--RENDERS PRODUCT CARDS INSIDE MARQUEE--//
const Marquee: FC<PropType> = ({ children, variant = "primary" }) => {
  //rendering different backgrounds based on variants
  const rootClassName = cn(style.root, {
    [style.primary]: variant === "primary",
    [style.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <div className={style.container}>
        {/* fast marquee for auto horizontal scroll effect */}
        <FastMarquee gradient={false} speed={50}>
          {children}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Marquee;
