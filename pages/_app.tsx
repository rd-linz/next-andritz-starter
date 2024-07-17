import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { LayoutProvider, useThemeSettings } from "@andritz/hwf2";
import { ThemeProvider } from "@mui/material/styles";
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
  const themeSettings = useThemeSettings();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={themeSettings.theme}>
        <Head>
          <title>{application.title}</title>
        </Head>
        <LayoutProvider {...layout} themeSettings={themeSettings}>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </LayoutProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
