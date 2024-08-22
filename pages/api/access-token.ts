import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultSession } from "next-auth";

/**
 * Extends the default session interface to include access and refresh tokens.
 *
 * @module next-auth
 */
declare module "next-auth" {
  /**
   * Extended session interface.
   * @interface Session
   * @extends DefaultSession
   */
  interface Session extends DefaultSession {
    /**
     * The access token for the session.
     * @type {string}
     */
    accessToken: string;

    /**
     * The refresh token for the session.
     * @type {string}
     */
    refreshToken: string;

    /**
     * The expiration time for the access token.
     * @type {number}
     */
    error?: "RefreshTokenError";
  }
}

/**
 * Fetches a new access token using the provided refresh token and scope.
 *
 * @param {string} refreshToken - The refresh token to use for obtaining a new
 * access token.
 * @param {string} scope - The scope for which the access token is requested.
 * @returns {Promise<Object>} A promise that resolves to an object containing
 * the new access token, its expiration time, and a new refresh token, or an
 * error object if the request fails.
 */
export async function getAccessToken(refreshToken: string, scope: string) {
  const url = `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`;
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=refresh_token" +
      `&client_secret=${process.env.AZURE_AD_CLIENT_SECRET}` +
      `&refresh_token=${refreshToken as string}` +
      `&client_id=${process.env.AZURE_AD_CLIENT_ID}` +
      `&scope=${encodeURIComponent(scope)}`,
  })
    .then((res) => res.json())
    .then((res) => {
      return {
        accessToken: res.access_token,
        expiresIn: Date.now() + res.expires_in * 1000,
        refreshToken: res.refresh_token,
      };
    });
}


/**
 * API handler to handle access token requests.
 *
 * @param {NextApiRequest} req - The API request object.
 * @param {NextApiResponse} res - The API response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { refresh_token: refreshToken, scope } = req.body;
  const token = await getAccessToken(refreshToken, scope);
  res.json(token);
}
