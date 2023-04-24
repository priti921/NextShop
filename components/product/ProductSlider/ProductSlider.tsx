import React, { FC, ReactNode } from "react";
import style from "./ProductSlider.module.css";

type Prop = {
  children: ReactNode;
};

const ProductSlider: FC<Prop> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
};
export default ProductSlider;
