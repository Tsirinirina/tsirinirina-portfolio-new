const envConf = {
  node: process.env.NODE_ENV || "development",
  apiBaseUri: process.env.API_BASE_URL || "/api",
};

export default envConf;
