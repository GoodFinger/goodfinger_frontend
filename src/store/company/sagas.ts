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
  UPDATE_COMPANY_SUCCESS
} from "./types";

function* companyList({ email }: ListCompanyRequestAction) {
  try {
    //call companyList
    const companyList: Array<Company> = [
      { id: "test", name: "test1", location: "서울시 강남구 신사동 123-4", imageList: [] }
    ];

    //when companyList Success
    yield put({
      type: LIST_COMPANY_SUCCESS,
      companyList
    });
  } catch (e) {
    yield put({
      type: LIST_COMPANY_FAILURE
    });
  }
}

function* companyDetail({ id }: DetailCompanyRequestAction) {
  try {
    //call company detail
    const selCompany: Company = { id: "", name: "", location: "", imageList: [] };

    //when company detail call success
    yield put({
      type: DETAIL_COMPANY_SUCCESS,
      selCompany
    });
  } catch (e) {
    yield put({
      type: DETAIL_COMPANY_FAILURE
    });
  }
}

function* companyInsert({ email, name, location, imageList }: InsertCompanyRequestAction) {
  try {
    //call insert company
    console.log(email, name, location, imageList);
    //when success
    //1. insert company success
    yield put({
      type: INSERT_COMPANY_SUCCESS
    });
    //2. push to companylist url
    yield call(push, "/companyList");
  } catch (e) {
    yield put({
      type: INSERT_COMPANY_FAILURE
    });
  }
}

function* companyUpdate({ email, id, name, location, imageList }: UpdateCompanyRequestAction) {
  try {
    //call update company

    //when success
    //1. update company success
    yield put({
      type: UPDATE_COMPANY_SUCCESS
    });
    //2. push to companylist url
    yield call(push, "/companyList");
  } catch (e) {
    yield put({
      type: UPDATE_COMPANY_FAILURE
    });
  }
}

function* companyDelete({ email, id }: DeleteCompanyRequestAction) {
  try {
    //call delete company

    //when success
    //1. delete company success
    yield put({
      type: DELETE_COMPANY_REQUEST
    });
    //2. push to companylist url
    yield call(push, "/companyList");
  } catch (e) {
    yield put({
      type: DELETE_COMPANY_FAILURE
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
    companyDeleteRequest()
  ]);
}
