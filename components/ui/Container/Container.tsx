import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return <div className="px-6 mx-auto max-w-8xl">{children}</div>;
};

export default Container;
