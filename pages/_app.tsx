import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { LayoutProvider, andritzLightTheme } from "@andritz/hwf2";
import { getMsalPCA } from "@andritz/hwf2";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { Fallback } from "@/components/Fallback";
import { DynamicMSAL } from "@/components/MSALAuth";
import { useHideSplashScreen } from "@/components/SplashScreen";
import { settings } from "@/settings";

const {application, auth, layout } = settings;
const pca = getMsalPCA(auth.authConfig, auth.loginRequest, true);

export default function App({ Component, pageProps }: AppProps) {
  useHideSplashScreen();
  return (
    <ThemeProvider theme={andritzLightTheme}>
      <Head>
        <title>
          {application.title}
        </title>
      </Head>
      <DynamicMSAL pca={pca} fallback={<Fallback />}>
        <LayoutProvider  {...layout}>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </LayoutProvider>
      </DynamicMSAL>
    </ThemeProvider>
  );
}
