export const API_BASE =
  process.env.NODE_ENV === "development"
    ? "/api/v1/"
    : " https://YOUR_PRODUCTION-SERVER-HERE/api/v1/";
