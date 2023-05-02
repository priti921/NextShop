import { FC } from "react";
import s from "./Swatch.module.css";
import { Check } from "@components/icons";
import { isDark } from "@lib/color";
import cn from "classnames";

interface Props {
  color?: string;
  label?: string;
  active?: boolean;
  variant?: "size" | "color" | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  //sets the colour if props return true
  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
  });

  return (
    <button
      //sets the background color of button based on color passed
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {/* if active then sets check to true */}
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {/* if it's a size varianet then add label or else no label */}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
