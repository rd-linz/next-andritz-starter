import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

import { getAccessToken } from "../access-token";

const settings = {
  scope: process.env.AZURE_MSAL_SCOPE || "openid User.Read offline_access",
  clientId: process.env.AZURE_AD_CLIENT_ID || "",
  clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "",
  tenantId: process.env.AZURE_AD_TENANT_ID,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
};

type JWTCallbackArgs = { token: any; account: any; profile?: any };
type SessionCallbackArgs = { session: any; token: any };

export const authOptions = {
  providers: [
    AzureADProvider({
      id: "azure-ad",
      name: "AzureAD",
      clientId: settings.clientId,
      clientSecret: settings.clientSecret,
      tenantId: settings.tenantId,
      authorization: { params: { scope: settings.scope } },
    }),
  ],
  secret: settings.nextAuthSecret,
  pages: {
    signIn: "/auth/signin/",
  },
  callbacks: {
    /**
     * JWT callback to handle token updates.
     *
     * @param {Object} params - The parameters for the callback.
     * @param {Object} params.token - The current token.
     * @param {Object} [params.account] - The account information.
     * @param {Object} [params.profile] - The profile information.
     * @returns {Promise<Object>} The updated token.
     */
    async jwt({ token, account, profile }: JWTCallbackArgs) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          expiresAt: account.expires_at,
          refreshToken: account.refresh_token,
          id: profile.id,
        };
      } else if (Date.now() < token.expiresAt * 1000) {
        return token;
      } else {
        if (!token.refreshToken) {
          console.log("Current settings >>>", settings);
          throw new TypeError("Missing refresh_token");
        }

        try {
          const newTokens = await getAccessToken(
            token.refreshToken,
            settings.scope
          );

          token.accessToken = newTokens.accessToken;
          token.expiresAt = Math.floor(Date.now() / 1000 + newTokens.expiresIn);
          // Some providers only issue refresh tokens once, so preserve if we did not get a new one
          if (newTokens.refreshToken) {
            token.refreshToken = newTokens.refreshToken;
          }
          return token;
        } catch (error) {
          console.error("Error refreshing accessToken", error);
          console.log("Current settings >>>", settings);
          // If we fail to refresh the token, return an error so we can handle it on the page
          token.error = "RefreshTokenError";
          return token;
        }
      }
    },
    /**
     * Session callback to handle session updates.
     *
     * @param {Object} params - The parameters for the callback.
     * @param {Object} params.session - The current session.
     * @param {Object} params.token - The current token.
     * @returns {Promise<Object>} The updated session.
     */
    async session({ session, token }: SessionCallbackArgs) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
};

// @ts-ignore
export default NextAuth(authOptions);
