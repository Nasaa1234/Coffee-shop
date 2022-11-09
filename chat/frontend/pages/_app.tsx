import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LeftBar } from "../layout/Header";
import { DataProvider } from "../providers/DataContext";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <DataProvider>
      <LeftBar
        authPage={router.asPath == "/login" || router.asPath == "/signUp"}
      >
        <Component {...pageProps} />
      </LeftBar>
    </DataProvider>
  );
}
