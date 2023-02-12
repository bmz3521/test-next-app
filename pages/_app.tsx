import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "./component/Layout";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
}
