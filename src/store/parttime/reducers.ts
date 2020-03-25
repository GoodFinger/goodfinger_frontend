/** import types */
import {
  ParttimeList,
  PartTimeActionTypes,
  LIST_PARTTIME_REQUEST,
  LIST_PARTTIME_FAILURE,
  DETAIL_PARTTIME_FAILURE,
  DELETE_PARTTIME_FAILURE,
  DELETE_APPLICANT_FAILURE,
  LIST_QUESTION_FAILURE,
  DELETE_QUESTION_FAILURE,
  INSERT_ANSWER_FAILURE,
  UPDATE_ANSWER_FAILURE,
  DELETE_ANSWER_FAILURE,
  INSERT_PARTTIME_FAILURE,
  UPDATE_PARTTIME_FAILURE,
  INSERT_APPLICANT_FAILURE,
  INSERT_QUESTION_FAILURE,
  UPDATE_QUESTION_FAILURE,
  INSERT_PARTTIME_SUCCESS,
  DELETE_PARTTIME_SUCCESS,
  UPDATE_PARTTIME_SUCCESS,
  DELETE_APPLICANT_SUCCESS,
  INSERT_APPLICANT_SUCCESS,
  INSERT_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  INSERT_ANSWER_SUCCESS,
  UPDATE_ANSWER_SUCCESS,
  DELETE_ANSWER_SUCCESS,
  DETAIL_PARTTIME_REQUEST,
  LIST_QUESTION_REQUEST,
  LIST_PARTTIME_SUCCESS,
  DETAIL_PARTTIME_SUCCESS,
  LIST_QUESTION_SUCCESS,
  INSERT_PARTTIME_REQUEST,
  UPDATE_PARTTIME_REQUEST,
  DELETE_PARTTIME_REQUEST,
  INSERT_APPLICANT_REQUEST,
  DELETE_APPLICANT_REQUEST,
  INSERT_QUESTION_REQUEST,
  UPDATE_QUESTION_REQUEST,
  DELETE_QUESTION_REUQEST,
  INSERT_ANSWER_REQUEST,
  UPDATE_ANSWER_REQUEST,
  DELETE_ANSWER_REQUEST
} from "./types";

const initialState: ParttimeList = {
  partTimeList: [],
  loading: false,
  setPartTime: {
    announcementId: "",
    flag: "",
    createDate: "",
    company: "",
    category: "",
    locationCity: "",
    locatinDistrict: "",
    recruitment: 0,
    preferredSex: "",
    preferredAge: [],
    task: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    salary: [],
    etc: {
      salaryRightNow: "",
      breaktime: "",
      oneDayWorker: ""
    },
    jobOffer: {
      introduction: "",
      picture: []
    },
    memo: "",
    applicant: [],
    questionList: []
  },
  applicantQuestion: {
    annountmentId: "",
    applicantQList: []
  },
  errMsg: ""
};

const partTimeReducer = (state = initialState, action: PartTimeActionTypes) => {
  switch (action.type) {
    case INSERT_PARTTIME_SUCCESS:
    case DELETE_PARTTIME_SUCCESS:
    case UPDATE_PARTTIME_SUCCESS:
    case INSERT_APPLICANT_SUCCESS:
    case DELETE_APPLICANT_SUCCESS:
    case INSERT_QUESTION_SUCCESS:
    case UPDATE_QUESTION_SUCCESS:
    case DELETE_QUESTION_SUCCESS:
    case INSERT_ANSWER_SUCCESS:
    case UPDATE_ANSWER_SUCCESS:
    case DELETE_ANSWER_SUCCESS:
    case LIST_PARTTIME_FAILURE:
    case DETAIL_PARTTIME_FAILURE:
    case INSERT_PARTTIME_FAILURE:
    case UPDATE_PARTTIME_FAILURE:
    case DELETE_PARTTIME_FAILURE:
    case INSERT_APPLICANT_FAILURE:
    case DELETE_APPLICANT_FAILURE:
    case LIST_QUESTION_FAILURE:
    case INSERT_QUESTION_FAILURE:
    case UPDATE_QUESTION_FAILURE:
    case DELETE_QUESTION_FAILURE:
    case INSERT_ANSWER_FAILURE:
    case UPDATE_ANSWER_FAILURE:
    case DELETE_ANSWER_FAILURE:
      return {
        ...state,
        loading: false
      };
    case LIST_PARTTIME_REQUEST:
    case DETAIL_PARTTIME_REQUEST:
    case INSERT_PARTTIME_REQUEST:
    case UPDATE_PARTTIME_REQUEST:
    case DELETE_PARTTIME_REQUEST:
    case INSERT_APPLICANT_REQUEST:
    case DELETE_APPLICANT_REQUEST:
    case LIST_QUESTION_REQUEST:
    case INSERT_QUESTION_REQUEST:
    case UPDATE_QUESTION_REQUEST:
    case DELETE_QUESTION_REUQEST:
    case INSERT_ANSWER_REQUEST:
    case UPDATE_ANSWER_REQUEST:
    case DELETE_ANSWER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LIST_PARTTIME_SUCCESS:
      return {
        ...state,
        partTimeList: action.partTimeList,
        loading: false
      };
    case DETAIL_PARTTIME_SUCCESS:
      return {
        ...state,
        loading: false,
        selPartTime: action.selPartTime
      };
    case LIST_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questionList: action.questionList
      };
    default:
      return state;
  }
};

export default partTimeReducer;
