import NavBar from "@/components/NavBar";
import React from "react";

type LayoutProps = {
  children: JSX.Element;
  asPath: string;
};

const Layout: React.FC<LayoutProps> = ({ children, asPath }) => {
  return (
    <>
      <NavBar asPath={asPath} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
