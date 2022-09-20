import AdminReducer from "./adminReducer";
import AuthReducer from "./authReducer";
import { combineReducers } from "redux";
const rootReducer= combineReducers({ AdminReducer, AuthReducer });
export default rootReducer;
