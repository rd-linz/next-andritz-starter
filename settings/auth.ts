import { AuthSettings } from "./types";

// Define the settings for the MSAL (Microsoft Authentication Library) configuration
const settings = {
  // The Azure AD client (application) ID of your app, check Readme.md for more information!
  clientId: "<azure-client-id>",
  // The Azure AD tenant information which can be in GUID or domain name format
  tenantId: "andritz.onmicrosoft.com",
  // The scopes that the app requires:
  // - "User.Read": Allows the app to sign in the user and read the user's profile.
  // - "Presence.Read.All": Allows the app to read all presence information for all users.
  scopes: ["User.Read"],
};

const msalConfig = {
  auth: {
    clientId: settings.clientId,
    authority: `https://login.microsoftonline.com/${settings.tenantId}`,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  system: { allowNativeBroker: false },
  cache: { cacheLocation: "localStorage", storeAuthStateInCookie: true },
};

const loginRequest = { scopes: settings.scopes };

export const auth: AuthSettings = {
  authConfig: msalConfig,
  loginRequest: loginRequest
};