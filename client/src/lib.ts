export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://twitch-user-id-finder.herokuapp.com/api/v1"
    : "http://localhost:9000/api/v1";
