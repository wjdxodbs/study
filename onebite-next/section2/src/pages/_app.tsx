import GlobalLayout from "@/components/GlobalLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
