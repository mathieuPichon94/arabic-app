import React from "react";

import { useSession } from "next-auth/react";
import { SignInPage } from "@/components/SignInPage";

type LayoutProps = {
  children: JSX.Element;
  asPath: string;
};

const Layout: React.FC<LayoutProps> = ({ children, asPath }) => {
  const { data: session } = useSession();
  if (session) return <>{children}</>;
  return <SignInPage />;
};

export default Layout;
