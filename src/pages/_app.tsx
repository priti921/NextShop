import { Layout } from "@components/common";
import type { AppProps } from "next/app";
import "../../assets/main.css";
import { UIprovider } from "@components/ui/contest";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIprovider>
      <div className="app-component">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </UIprovider>
  );
}
