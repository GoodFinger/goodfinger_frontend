import { put, takeLatest, all, call } from "redux-saga/effects";
import { push } from "lib/historyUtils";
// import axios from "axios";
import {
  ListPartTimeRequestAction,
  LIST_PARTTIME_FAILURE,
  LIST_PARTTIME_SUCCESS,
  LIST_PARTTIME_REQUEST,
  InsertPartTimeRequestAction,
  INSERT_PARTTIME_FAILURE,
  INSERT_PARTTIME_REQUEST,
} from "./types";
import { getPartTimeList, addParttime } from "lib/api/api";

function* insertParttime({ parttime, question }: InsertPartTimeRequestAction) {
  try {
    const response = yield call(addParttime, { parttime, question });
    const { status } = response;

    if (status === 200) {
      yield call(push, "/parttimeList");
    }
  } catch (e) {
    yield put({
      type: INSERT_PARTTIME_FAILURE,
    });
  }
}

function* partTimeList({ email }: ListPartTimeRequestAction) {
  try {
    const response = yield call(getPartTimeList, { email });

    const { status, data } = response;
    console.log(response);

    if (status === 200) {
      yield put({
        type: LIST_PARTTIME_SUCCESS,
        partTimeList: data,
      });
    }
  } catch (e) {
    yield put({
      type: LIST_PARTTIME_FAILURE,
    });
  }
}

function* partTimeListRequest() {
  yield takeLatest(LIST_PARTTIME_REQUEST, partTimeList);
  yield takeLatest(INSERT_PARTTIME_REQUEST, insertParttime);
}

export default function* partTimeSaga() {
  yield all([partTimeListRequest()]);
}
