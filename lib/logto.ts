import { LogtoNextConfig } from '@logto/next';

export const logtoConfig: LogtoNextConfig = {
  appId: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  endpoint: process.env.LOGTO_ENDPOINT, // E.g. http://localhost:3001
  baseUrl: process.env.BASE_URL, // E.g. http://localhost:3000
  cookieSecret: process.env.COOKIE_SECRET,
  cookieSecure: process.env.NODE_ENV === 'production',
};