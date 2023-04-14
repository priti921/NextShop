import React, { FC, ReactNode } from "react";
import style from "./Marquee.module.css";
import FastMarquee from "react-fast-marquee";

const Marquee: FC<{ children: ReactNode[] }> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <FastMarquee gradient={false} speed={50}>
          {children}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Marquee;
