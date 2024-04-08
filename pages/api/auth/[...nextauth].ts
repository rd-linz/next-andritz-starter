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
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user, account, profile }: { token: any, user: any, account: any, profile: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.id = profile.id;
      }
      //TODO if expires_at > Date.now() --> refresh!
      return token;
    },
    async session({ session, token, user }: { session: any, token: any, user: any }) {
      session.accessToken = token.accessToken;
      return session;
    }
  }
};

export default NextAuth(authOptions);
