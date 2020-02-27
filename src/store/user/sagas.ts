import { all, put, takeLatest } from "redux-saga/effects";
import {
  LoginUserRequestAction,
  SignUpUserRequestAction,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "./types";

function* signUp({ email, password, name, birth, isBoss }: SignUpUserRequestAction) {
  //yield put() -- start loading
  try {
    //signup start code
    console.log(email, password, name, birth, isBoss);
    //when signup success
    yield put({
      type: SIGNUP_USER_SUCCESS,
      email,
      password,
      name,
      birth,
      isBoss
    });
  } catch (e) {
    yield put({
      type: SIGNUP_USER_FAILURE
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
      password
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAILURE
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
