import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import { NavbarMinimal } from "@/components/NavBar";

import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import Layout from "@/components/Layout";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import { AppShell } from "@mantine/core";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "dark" }}
        >
          <AppShell navbar={<NavbarMinimal />}>
            <Layout asPath={router.asPath}>
              <Component {...pageProps} />
            </Layout>
          </AppShell>
        </MantineProvider>
      </Provider>
    </SessionProvider>
  );
};

export default App;
