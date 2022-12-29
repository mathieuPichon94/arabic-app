import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import Layout from "@/components/Layout";

import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout asPath={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default trpc.withTRPC(App);
