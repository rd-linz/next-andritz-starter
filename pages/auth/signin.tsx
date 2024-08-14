import { useEffect } from "react";

import { useHideSplashScreen } from "@andritz/hwf2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background.paper",
    zIndex: 3000,
  },
  text: {
    color: "text.primary",
    fontSize: "1.5em",
  },
};

const statusMessages: Record<string, any> = {
  unauthenticated: "Checking your credentials...",
  loading: "Loading...",
};

export default function SignIn() {
  const { callbackUrl } = useRouter().query;
  const session = useSession();
  useHideSplashScreen();

  useEffect(() => {
    if (session.status === "unauthenticated" && callbackUrl) {
      signIn("azure-ad", { callbackUrl: callbackUrl as string });
    }
  }, [session.status, callbackUrl]);

  const statusMessage = statusMessages[session?.status] || "Authenticating...";

  return <AuthFeedback message={statusMessage} />;
}

const AuthFeedback = ({ message }: { message?: string }) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{message}</Typography>
    </Box>
  );
};
