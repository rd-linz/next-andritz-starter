import { useEffect } from 'react';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Image from "next/image";
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { styles } from "./signin.styles";

export default function SignIn() {
  const { callbackUrl }  = useRouter().query;
  const session = useSession();
  
  useEffect(() => {
    if(session.status === 'unauthenticated' && callbackUrl) {
      signIn('azure-ad', { callbackUrl: callbackUrl as string });
    }else{
      console.log('Session was found, signin', session);
    } 
  }, [session, callbackUrl]);

  if (session.status === 'unauthenticated') {
    return (
      <Box sx={styles.container}> 
        <Box sx={styles.logoContainer}>
          <Image
            src={"/img/logo_white.svg"}
            alt="logo"
            width={1}
            height={1}
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
            }}
          />
        </Box>
        <Typography sx={styles.text}>Redirecting to login... </Typography>
      </Box>
    );
  }

  return null;
}