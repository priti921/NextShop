import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
import { Footer } from "@components/common";

//Fixed 'Property 'children' does not exist on type {}' error by defining 'children' prop in the prop interface explicitly.

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={style.root}>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
