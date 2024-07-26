import {
  SplashScreen,
} from "@andritz/hwf2";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <style>{SplashScreen.style}</style>
      </Head>
      <body>
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
