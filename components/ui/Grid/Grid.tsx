import React, { FC, ReactNode } from "react";
import style from "./Grid.module.css";

const Grid: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default Grid;
