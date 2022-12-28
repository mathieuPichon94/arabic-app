import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import NavBar from "@/components/NavBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default trpc.withTRPC(App);
