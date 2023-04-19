import React, { FC, ReactNode } from "react";
import style from "./Grid.module.css";
import cn from "classnames";

type PropType = { children: ReactNode[]; layout?: "A" | "B" };

//--GRID LAYOUT FOR HOME PAGE--
const Grid: FC<PropType> = ({ children, layout = "A" }) => {
  //render different layout based on layout type passed
  const rootClassName = cn(style.root, {
    [style.layoutA]: layout === "A",
    [style.layoutB]: layout === "B",
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
