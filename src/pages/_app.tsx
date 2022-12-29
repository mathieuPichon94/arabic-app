import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import Layout from "@/components/Layout";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout asPath={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
};

export default App;
