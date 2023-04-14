import React, { FC, ReactNode } from "react";
import style from "./Marquee.module.css";

const Marquee: FC<{ children: ReactNode[] }> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Marquee;
