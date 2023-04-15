import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

//Fixed 'Property 'children' does not exist on type {}' error by defining 'children' prop in the prop interface explicitly.
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const ui = useUI();
  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar isOpen={ui.isSidebarOpen}>
        {" "}
        {/* passing state to sidebar */}
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
