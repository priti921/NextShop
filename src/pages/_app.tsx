import "@/styles/globals.css";
import { Layout } from "@components/common";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-component">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
