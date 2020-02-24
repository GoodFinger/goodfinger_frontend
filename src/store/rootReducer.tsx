import { combineReducers } from "redux";
import userReducer from "./user/reducers";
import { User } from "./user/types";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;

export type RootState = {
  user: User;
};
