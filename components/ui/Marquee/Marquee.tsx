import React, { FC, ReactNode } from "react";
import style from "./Marquee.module.css";

const Marquee: FC<{ children: ReactNode[] }> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default Marquee;
