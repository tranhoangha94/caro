import { LOGIN, LOGOUT } from "../actions/config";

const USER_DATA = [
  {
    username: "hadz",
    password: "xxx",
  },
];

const checkAuthen = (username: string, password: string) => {
  return USER_DATA.some(
    (user) => user.username === username && user.password === password
  );
};

const initState = {
  isLogin: false,
  userName: "",
  password: "",
};

export const authenReducer = (state = initState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return checkAuthen(action.username, action.password)
        ? { ...state, username: action.username, password: action.password }
        : state;
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};
