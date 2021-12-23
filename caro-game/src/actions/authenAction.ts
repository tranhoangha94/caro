import { LOGIN, LOGOUT } from "./config";

export const login = (payload: any) => {
  return {
    type: LOGIN,
    username: payload.username,
    password: payload.password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
