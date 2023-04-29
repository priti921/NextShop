import React, {
  FC,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import style from "./ProductSlider.module.css";

type Prop = {
  children: ReactNode;
};

const ProductSlider: FC<Prop> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className="keen-slider h-full transition-opacity">
        {/* loops through each children and if the child is valid, clones the child to be able to pass className */}
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { className: "keen-slider__slide" });
          }
          return child;
        })}
      </div>
    </div>
  );
};
export default ProductSlider;
