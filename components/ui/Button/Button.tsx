import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

//extending the button html attribute of html button element
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

//                                      passed rest of the props
const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    //                        using passed className and rest of the prop passed
    <button className={cn(styles.root, className)} {...rest} type="button">
      {children}
    </button>
  );
};

export default Button;
