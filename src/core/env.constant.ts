import * as env from "env-var";

const envConf = {
  jwtSecret: process.env.JWT_SECRET_KEY,
  jwtExpiration: process.env.JWT_EXPIRATION,
  node: process.env.NODE_ENV || "development",
  apiBaseUri: process.env.API_BASE_URL || "/api",
  nextAuthUrl: process.env.NEXTAUTH_URL,
};

export default envConf;
