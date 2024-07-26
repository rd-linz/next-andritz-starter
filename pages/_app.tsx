import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import {
  Layout,
  AppCustomProps,
  useThemeController,
  appGetInitialProps,
  useHideSplashScreen,
} from "@andritz/hwf2";
import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import { settings } from "@/settings";

const { application, layout } = settings;

const App = ({
  Component,
  pageProps: { session, ...pageProps },
  defaultTheme,
  preferSystemDefault,
}: AppProps & AppCustomProps) => {
  useHideSplashScreen();

  const themeArgs = { defaultTheme, preferSystemDefault };
  const themeControllerArgs = { ...layout.themeSettings, ...themeArgs };
  const themeController = useThemeController(themeControllerArgs);

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
};

App.getInitialProps = appGetInitialProps;

export default App;
