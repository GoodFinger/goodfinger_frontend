import { put, takeLatest, all } from "redux-saga/effects";
// import { push } from "lib/historyUtils";
// import axios from "axios";
import {
  ListPartTimeRequestAction,
  PartTime,
  LIST_PARTTIME_FAILURE,
  LIST_PARTTIME_SUCCESS,
  LIST_PARTTIME_REQUEST
} from "./types";

function* partTimeList({ email }: ListPartTimeRequestAction) {
  try {
    //call parttimelist
    const partTimeList: Array<PartTime> = [
      {
        announcementId: "test1",
        flag: "true",
        createDate: "2020-03-03",
        company: "testcompany",
        imageList: [],
        category: ["서빙", "헬롱"],
        locationCity: "서울",
        locatinDistrict: "강남구",
        recruitment: 3,
        preferredSex: "A",
        preferredAge: [20, 30, 40],
        task: "서빙업무입니다.",
        startDate: "2020-03-10",
        endDate: "2020-03-12",
        startTime: "09:00",
        endTime: "18:00",
        salary: ["day", "150000"],
        etc: {
          salaryRightNow: "Y",
          breaktime: "Y",
          oneDayWorker: "Y"
        },
        jobOffer: {
          introduction: "우와아아아ㅏ아앙",
          picture: []
        },
        memo: "메모입니당",
        applicant: [],
        questionList: []
      }
    ];

    yield put({
      type: LIST_PARTTIME_SUCCESS,
      partTimeList
    });
  } catch (e) {
    yield put({
      type: LIST_PARTTIME_FAILURE
    });
  }
}

function* partTimeListRequest() {
  yield takeLatest(LIST_PARTTIME_REQUEST, partTimeList);
}

export default function* partTimeSaga() {
  yield all([partTimeListRequest()]);
}
