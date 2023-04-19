import React, { FC, ReactNode } from "react";

type PropType = {
  children: ReactNode | ReactNode[];
};

//--FIXES THE MAX WIDTH WITH HORIZONTAL PADDING AND HORIZONTAL MARGIN
const Container: FC<PropType> = ({ children }) => {
  return <div className="px-6 mx-auto max-w-8xl">{children}</div>;
};

export default Container;
