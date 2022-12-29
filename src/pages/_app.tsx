import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import Layout from "@/components/Layout";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Layout asPath={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default trpc.withTRPC(App);
