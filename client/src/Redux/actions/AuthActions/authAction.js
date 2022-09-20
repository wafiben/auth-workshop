import { LOGIN, SINUP, LOG_OUT, USER_FAIL } from "./../../Types";
import axios from "axios";
export const login = (userInfo, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:9000/api/login", userInfo);
    const { token, user } = res.data;
    dispatch({ type: LOGIN, payload: { token, user } });
    if (user.role === 1) {
      navigate("/admin");
    } else {
      navigate("/add");
    }
  } catch (error) {
    dispatch({ type: USER_FAIL });
    error.response.data.errors.map((elt) => alert(elt.msg));
  }
};
export const register = (userInfo, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:9000/api/sing-up", userInfo);
    const { token, user } = res.data;
    dispatch({ type: LOGIN, payload: { token, user } });
    navigate("/add");
  } catch (error) {
    error.response.data.errors.map((elt) => alert(elt.msg));
  }
};
export const logOut = () => {
  return { type: LOG_OUT };
};
