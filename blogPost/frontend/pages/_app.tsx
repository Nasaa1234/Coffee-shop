import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../layout";
import { DataProvider, LoaderProvider } from "../providers";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <LoaderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoaderProvider>
    </DataProvider>
  );
}

export default MyApp;
