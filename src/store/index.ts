import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import userReducer from "store/user/reducers";
import companyReducer from "store/company/reducers";
import userSaga from "store/user/sagas";
import companySaga from "store/company/sagas";
import { User } from "store/user/types";
import { CompanyList } from "store/company/types";

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer
});
export default rootReducer;

export type RootState = {
  user: User;
  company: CompanyList;
};

export function* rootSaga() {
  yield all([userSaga(), companySaga()]);
}
