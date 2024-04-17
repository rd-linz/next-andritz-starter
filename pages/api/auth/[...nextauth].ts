import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    AzureADProvider({
      id: "azure-ad",
      name:"AzureAD",
      clientId: process.env.AZURE_AD_CLIENT_ID || "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "",
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope: "openid User.Read Presence.Read.All offline_access",
        },
      },
    })
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: '/auth/signin/',
  },
  callbacks: {
    async jwt({ token, account, profile }: { token: any, account: any, profile: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at * 1000;
        token.id = profile.id;
      }
      if (Date.now() < token.expiresAt) {
        return token;
      }
      const returnT = await refreshAccessToken(token);
      return returnT;
    },
    async session({ session, token }: { session: any , token: any }) {
      session.accessToken = token.accessToken;
      return session;
    }
  }
};

async function refreshAccessToken(token: any) {
  try {
    const url = `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`;
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token`
      + `&client_secret=${process.env.AZURE_AD_CLIENT_SECRET}`
      + `&refresh_token=${token.refreshToken as string}`
      + `&client_id=${process.env.AZURE_AD_CLIENT_ID}`
    }).then(res => res.json())
      .then(res => {
        return {
          ...token,
          accessToken: res.access_token,
          expiresAt: Date.now() + res.expires_in * 1000,
          refreshToken: res.refresh_token ?? token.refreshToken, // Fall backto old refresh token
        };
      });
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

// @ts-ignore
export default NextAuth(authOptions);
