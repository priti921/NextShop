import React, { FC, ReactNode } from "react";
import style from "./Marquee.module.css";
import FastMarquee from "react-fast-marquee";
import cn from "classnames";

const Marquee: FC<{
  children: ReactNode[];
  variant?: "primary" | "secondary";
}> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(style.root, {
    [style.primary]: variant === "primary",
    [style.secondary]: variant === "secondary",
  });
  return (
    <div className={rootClassName}>
      <div className={style.container}>
        <FastMarquee gradient={false} speed={50}>
          {children}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Marquee;
