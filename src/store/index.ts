import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import userReducer from "./user/reducers";
import userSaga from "./user/sagas";
import { User } from "./user/types";

const rootReducer = combineReducers({
  user: userReducer
});
export default rootReducer;

export type RootState = {
  user: User;
};

export function* rootSaga() {
  yield all([userSaga()]);
}
