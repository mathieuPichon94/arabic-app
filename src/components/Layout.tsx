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
  if (session) {
    return (
      <>
        <NavBar asPath={asPath} />
        <main>{children}</main>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        text={"Sign In"}
        onClickButton={() => signIn()}
        intent={"success"}
      />
    </>
  );
};

export default Layout;
