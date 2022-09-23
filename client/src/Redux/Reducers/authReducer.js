import { LOGIN, USER_FAIL, LOG_OUT } from "../Types";
const initState = { user: null, isAuth: false };

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.payload.user, isAuth: true };
    case USER_FAIL:
      localStorage.clear();
      return { ...state, user: null, isAuth: false };
    case LOG_OUT:
      localStorage.clear();
      return { ...state, user: null, isAuth: false };
    default:
      return state;
  }
};
export default AuthReducer;
