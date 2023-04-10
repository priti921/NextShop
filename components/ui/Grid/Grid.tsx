import React, { FC, ReactNode } from "react";

const Grid: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="root-grid">{children}</div>;
};

export default Grid;
