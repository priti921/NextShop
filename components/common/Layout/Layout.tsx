import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

// --WEBPAGE LAYOUT--

type PropType = {
  children: ReactNode;
};

const Layout: FC<PropType> = ({ children }) => {
  //destructed properties from useUI context
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <div className={style.root}>
      <Navbar />
      {/* passing states to sidebar && sidebar is rendered on top of full page with blur background */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        {/* container cart related  */}
        <CartSidebar />
      </Sidebar>
      {/* all other components passed as children */}
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
