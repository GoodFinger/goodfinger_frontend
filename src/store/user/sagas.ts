import { all, put, takeLatest, call } from "redux-saga/effects";
import { push } from "lib/historyUtils";
import {
  LoginUserRequestAction,
  SignUpUserRequestAction,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "./types";
import { register } from "lib/api/api";

function* signUp({ email, password, name, birth, isBoss, sex }: SignUpUserRequestAction) {
  //yield put() -- start loading
  try {
    //signup start code
    const data = {
      email,
      password,
      name,
      birth,
      isBoss,
      sex,
    };
    console.log(email, password, name, birth, isBoss, sex);

    const reponse = yield call(register, data);

    //when signup success
    yield put({
      type: SIGNUP_USER_SUCCESS,
      email,
      password,
      name,
      birth,
      sex,
      isBoss,
    });

    if (isBoss) {
      yield call(push, "/companyList");
    } else {
      yield call(push, "/parttimeMain");
    }
  } catch (e) {
    yield put({
      type: SIGNUP_USER_FAILURE,
    });
  }
}

function* login({ email, password }: LoginUserRequestAction) {
  //yield put() -- start loading
  try {
    console.log(email, password);
    //login start codes

    //when login success
    yield put({
      type: LOGIN_USER_SUCCESS,
      email,
      password,
    });

    const isBoss = true;

    if (isBoss) {
      yield call(push, "/companyList");
    } else {
      yield call(push, "/parttimeMain");
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: LOGIN_USER_FAILURE,
    });
  }
}

function* singUpRequest() {
  yield takeLatest(SIGNUP_USER_REQUEST, signUp);
}

function* loginRequest() {
  yield takeLatest(LOGIN_USER_REQUEST, login);
}

export default function* userSaga() {
  yield all([singUpRequest(), loginRequest()]);
}
