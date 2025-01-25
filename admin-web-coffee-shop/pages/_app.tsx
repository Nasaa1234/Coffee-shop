import type { AppProps } from "next/app"
import MainLayout from "../src/layout"
import { DataProvider } from "../src/providers"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </DataProvider>
  )
}
