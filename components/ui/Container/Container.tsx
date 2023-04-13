import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <div className="px-6 mx-auto" style={{ maxWidth: "1920px" }}>
      {children}
    </div>
  );
};

export default Container;
