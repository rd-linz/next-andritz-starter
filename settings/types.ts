import { LayoutSettings } from "@andritz/hwf2";

export type ApplicationSettings = {
  title: string;
  description: string;
};

export type AuthSettings = {
  authConfig: {
    auth: {
      clientId: string;
      authority: string;
      redirectUri: string;
      postLogoutRedirectUri: string;
    };
    system: {
      allowNativeBroker: boolean;
    };
    cache: {
      cacheLocation: string;
      storeAuthStateInCookie: boolean;
    };
  };
  loginRequest: {
    scopes: string[];
  };
};

export type AppSettings = {
  application: ApplicationSettings;
  auth: AuthSettings;
  layout: LayoutSettings;
};