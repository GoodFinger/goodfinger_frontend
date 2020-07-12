import { all, put, takeLatest, call } from "redux-saga/effects";
import { push } from "lib/historyUtils";
import {
  ListCompanyRequestAction,
  LIST_COMPANY_REQUEST,
  DETAIL_COMPANY_REQUEST,
  INSERT_COMPANY_REQUEST,
  UPDATE_COMPANY_REQUEST,
  DELETE_COMPANY_REQUEST,
  DetailCompanyRequestAction,
  InsertCompanyRequestAction,
  UpdateCompanyRequestAction,
  DeleteCompanyRequestAction,
  LIST_COMPANY_FAILURE,
  DETAIL_COMPANY_FAILURE,
  INSERT_COMPANY_FAILURE,
  UPDATE_COMPANY_FAILURE,
  DELETE_COMPANY_FAILURE,
  LIST_COMPANY_SUCCESS,
  Company,
  DETAIL_COMPANY_SUCCESS,
  INSERT_COMPANY_SUCCESS,
  UPDATE_COMPANY_SUCCESS,
  DELETE_COMPANY_SUCCESS,
} from "./types";
import {
  insertCompany,
  getCompanyDetail,
  getCompanyList,
  updateCompany,
  deleteCompany,
} from "lib/api/api";

function* companyList({ email }: ListCompanyRequestAction) {
  try {
    //call companyList
    const response = yield call(getCompanyList, { email });

    const { data } = response;

    //when companyList Success
    yield put({
      type: LIST_COMPANY_SUCCESS,
      companyList: data as Array<Company>,
    });
  } catch (e) {
    yield put({
      type: LIST_COMPANY_FAILURE,
    });
  }
}

function* companyDetail({ comId }: DetailCompanyRequestAction) {
  try {
    //call company detail

    const response = yield call(getCompanyDetail, { comId });
    const { status, data } = response;
    console.log(data);
    if (status === 200) {
      //when company detail call success
      yield put({
        type: DETAIL_COMPANY_SUCCESS,
        selCompany: data,
      });

      yield call(push, "/companyUpdate/" + comId);
    }
  } catch (e) {
    yield put({
      type: DETAIL_COMPANY_FAILURE,
    });
  }
}

function* companyInsert({
  mastername,
  email,
  name,
  location,
  imageList,
}: InsertCompanyRequestAction) {
  try {
    //call insert company
    const data = new FormData();
    const text = {
      mastername,
      masterId: email,
      name,
      location,
    };

    data.append("company", JSON.stringify(text));

    imageList.forEach((image) => data.append("files", image));

    const response = yield call(insertCompany, { data });
    const { status } = response;

    //when success
    if (status === 200) {
      //1. insert company success
      yield put({
        type: INSERT_COMPANY_SUCCESS,
      });
      //2. push to companylist url
      yield call(push, "/companyList");
    }
  } catch (e) {
    yield put({
      type: INSERT_COMPANY_FAILURE,
    });
  }
}

function* companyUpdate({
  email,
  id,
  name,
  location,
  imageList,
  picture,
  mastername,
}: UpdateCompanyRequestAction) {
  try {
    //call update company
    const data = new FormData();
    const text = {
      mastername,
      masterId: email,
      name,
      location,
      picture,
    };

    data.append("company", JSON.stringify(text));
    data.append("comId", id);

    imageList.forEach((image) => data.append("files", image));
    console.log(data.getAll("files"));

    const response = yield call(updateCompany, { data });
    const { status } = response;
    console.log(response);
    if (status !== 200) {
      yield put({
        type: UPDATE_COMPANY_FAILURE,
      });
    }
    //when success
    //1. update company success
    yield put({
      type: UPDATE_COMPANY_SUCCESS,
    });
    //2. push to companylist url
    yield call(push, "/companyList");
  } catch (e) {
    yield put({
      type: UPDATE_COMPANY_FAILURE,
    });
  }
}

function* companyDelete({ email, id }: DeleteCompanyRequestAction) {
  try {
    //call delete company
    const response = yield call(deleteCompany, { comId: id });
    const { data } = response;

    console.log(response);

    if (data !== "ok") {
      return;
    }
    //when success
    //1. delete company success
    yield put({
      type: DELETE_COMPANY_SUCCESS,
    });
    //2. push to companylist url
    yield call(push, "/companyList");
  } catch (e) {
    yield put({
      type: DELETE_COMPANY_FAILURE,
    });
  }
}

//detail, list, insert, update, delete request
function* compnayListRequest() {
  yield takeLatest(LIST_COMPANY_REQUEST, companyList);
}

function* companyDetailRequest() {
  yield takeLatest(DETAIL_COMPANY_REQUEST, companyDetail);
}

function* companyInsertRequest() {
  yield takeLatest(INSERT_COMPANY_REQUEST, companyInsert);
}

function* companyUpdateRequest() {
  yield takeLatest(UPDATE_COMPANY_REQUEST, companyUpdate);
}

function* companyDeleteRequest() {
  yield takeLatest(DELETE_COMPANY_REQUEST, companyDelete);
}

export default function* companySaga() {
  yield all([
    compnayListRequest(),
    companyDetailRequest(),
    companyInsertRequest(),
    companyUpdateRequest(),
    companyDeleteRequest(),
  ]);
}
