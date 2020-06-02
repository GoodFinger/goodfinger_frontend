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
  LogoutUserRequestAction,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
} from "./types";
import { register, userLogin, userLogout } from "lib/api/api";

function* signUp({ email, password, name, birth, isBoss, sex }: SignUpUserRequestAction) {
  //yield put() -- start loading
  try {
    //signup start code
    const info = {
      email,
      password,
      name,
      birth,
      isBoss,
      sex,
    };
    console.log(email, password, name, birth, isBoss, sex);

    const response = yield call(register, info);
    console.log(response);

    const { data } = response;
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

    localStorage.setItem("goodfinger", JSON.stringify(info));

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
    const info = {
      email,
      password,
    };
    //login start codes
    const response = yield call(userLogin, info);
    console.log(response);

    //when login success
    yield put({
      type: LOGIN_USER_SUCCESS,
      email,
      password,
    });
    localStorage.setItem("goodfinger", JSON.stringify(info));

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

function* logout({ email }: LogoutUserRequestAction) {
  try {
    const response = yield call(userLogout, email);
    const { status } = response;
    console.log(response);
    if (status === 200) {
      yield put({
        type: LOGOUT_USER_SUCCESS,
      });

      localStorage.removeItem("goodfinger");
    }
  } catch (e) {
    yield put({
      type: LOGOUT_USER_FAILURE,
    });
  }
}

function* singUpRequest() {
  yield takeLatest(SIGNUP_USER_REQUEST, signUp);
}

function* loginRequest() {
  yield takeLatest(LOGIN_USER_REQUEST, login);
}

function* logoutRequest() {
  yield takeLatest(LOGOUT_USER_REQUEST, logout);
}

export default function* userSaga() {
  yield all([singUpRequest(), loginRequest(), logoutRequest()]);
}
