import { FC, ReactNode } from "react";
import style from "./Layout.module.css";

//Fixed 'Property 'children' does not exist on type {}' error by defining 'children' prop in the prop interface explicitly.
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <main style={{ color: "var(--primary)" }} className="fit">
        {children}
      </main>
    </div>
  );
};

export default Layout;
