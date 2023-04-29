import React, {
  FC,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import style from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

type Prop = {
  children: ReactNode;
};

const ProductSlider: FC<Prop> = ({ children }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {},
  });
  console.log(typeof slider);

  return (
    <div className={style.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        <button
          onClick={() => slider.current?.prev()}
          className={cn(style.leftControl, style.control)}
        />
        <button
          onClick={() => slider.current?.next()}
          className={cn(style.rightControl, style.control)}
        />

        {/* loops through each children and if the child is valid, clones the child to be able to pass className */}
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            //copy the class name props if it exits plus keen-slider
            return cloneElement(child, {
              className: `${child.props.className ?? ""} keen-slider__slide`,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
export default ProductSlider;
