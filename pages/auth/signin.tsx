import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

export default function SignIn() {
  const { callbackUrl }  = useRouter().query;
  const session = useSession();
  
  useEffect(() => {
    console.log('Session', session);
    if(session.status === 'unauthenticated') {
      //TODO: Handle callbackURLs the right way !
      signIn('azure-ad', { callbackUrl: callbackUrl as string });
    }else{
      console.log('Session was found, signin', session);
    } 
  }, [session, callbackUrl]);
 
  //TODO: Authentification screen that does only show if not authenticated
  return null;
}