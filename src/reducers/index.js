import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import player from "./player";
import roles from "./role";
export default combineReducers({
  auth,
  message,
  player,
  roles
});
