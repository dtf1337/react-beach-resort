import { createClient } from "contentful";

export default createClient({
  space: "0a38zzenr6k0",
  accessToken: "4xwG1MiHgxzS4LbKC47xk2aDIXaQVHzTCzcSpuupWLo",
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
