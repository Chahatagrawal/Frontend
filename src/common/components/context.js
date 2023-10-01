import { createContext } from "react";

export const LoginContext = createContext({
  userID: null,
  isLoggedin: false,
  login: () => {},
  logout: () => {},
});
