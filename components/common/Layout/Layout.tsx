import { FC, ReactNode } from "react";

//Fixed 'Property 'children' does not exist on type {}' error by defining 'children' prop in the prop interface explicitly.
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
