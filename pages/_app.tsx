import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Layout, useThemeController } from "@andritz/hwf2";
import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import { useHideSplashScreen } from "@/components/SplashScreen";
import { settings } from "@/settings";

const { application, layout } = settings;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useHideSplashScreen();

  const themeController = useThemeController(layout.themeSettings);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={themeController.theme}>
        <Head>
          <title>{application.title}</title>
        </Head>
        <Layout {...layout} themeController={themeController}>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
