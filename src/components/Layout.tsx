import NavBar from "@/components/NavBar";
import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/Button";

type LayoutProps = {
  children: JSX.Element;
  asPath: string;
};

const Layout: React.FC<LayoutProps> = ({ children, asPath }) => {
  const { data: session } = useSession();
  return (
    <>
      <NavBar asPath={asPath} />
      {session && <main>{children}</main>}
    </>
  );
};

export default Layout;
