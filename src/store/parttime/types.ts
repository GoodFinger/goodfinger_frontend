/** type check state */
export interface ParttimeList {
  partTimeList: Array<PartTime>;
  loading: boolean;
  setPartTime: PartTime;
  applicantQuestion: ApplicantQuestion;
  errMsg: string;
}

export interface PartTime {
  announcementId?: string;
  flag: string; // is parttime announcement finished?
  createDate?: string;
  company: string; //company id? or company name?
  imageList?: Array<string>;
  picture?: Array<File>;
  category: Array<string>;
  locationCity?: string;
  locatinDistrict?: string;
  recruitment: number;
  preferredSex: string;
  preferredAge: Array<number>;
  task: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  salary: Array<string>; // or Array<number>
  etc: EtcOption;
  jobOffer: JobOffer;
  memo: string;
  partTimeInfo: Array<PartTimeInfo>;
  applicant?: Array<string>;
  questionList?: Array<Question>;
  applicant_questions?: Array<string>;
}

export interface PartTimeInfo {
  title: string;
  content: string;
  id: string;
}

export interface EtcOption {
  salaryRightNow: string;
  breaktime: string;
  oneDayWorker: string;
}

export interface JobOffer {
  introduction: string;
  picture: Array<File>;
}

//employer's question
export interface ApplicantQuestion {
  annountmentId: string;
  applicantQList: Array<ApplicantQ>;
}

export interface ApplicantQ {
  applicantQId: string;
  applicantQContent: string;
  applicantQAnswer?: Array<ApplicantAnswer>;
}

export interface ApplicantAnswer {
  applicantQId: string;
  applicantQName: string;
  content: string;
}

//question
export interface Question {
  questionId: string;
  contactUserId: string;
  contactName: string;
  contactDate: string;
  contactData: string;
  contactComment: string;
}

/** define action */
/** parttime - list */
export const LIST_PARTTIME_REQUEST = "LIST_PARTTIME_REQUEST";
export const LIST_PARTTIME_SUCCESS = "LIST_PARTTIME_SUCCESS";
export const LIST_PARTTIME_FAILURE = "LIST_PARTTIME_FAILURE";

/** parttime - detail */
export const DETAIL_PARTTIME_REQUEST = "DETAIL_PARTTIME_REQUEST";
export const DETAIL_PARTTIME_SUCCESS = "DETAIL_PARTTIME_SUCCESS";
export const DETAIL_PARTTIME_FAILURE = "DETAIL_PARTTIME_FAILURE";

/** parttime - insert */
export const INSERT_PARTTIME_REQUEST = "INSERT_PARTTIME_REQUEST";
export const INSERT_PARTTIME_SUCCESS = "INSERT_PARTTIME_SUCCESS";
export const INSERT_PARTTIME_FAILURE = "INSERT_PARTTIME_FAILURE";

/** parttime - update */
export const UPDATE_PARTTIME_REQUEST = "UPDATE_PARTTIME_REQUEST";
export const UPDATE_PARTTIME_SUCCESS = "UPDATE_PARTTIME_SUCCESS";
export const UPDATE_PARTTIME_FAILURE = "UPDATE_PARTTIME_FAILURE";

/** parttime - delete */
export const DELETE_PARTTIME_REQUEST = "DELETE_PARTTIME_REQUEST";
export const DELETE_PARTTIME_SUCCESS = "DELETE_PARTTIME_SUCCESS";
export const DELETE_PARTTIME_FAILURE = "DELETE_PARTTIME_FAILURE";

/** applicant - insert */
export const INSERT_APPLICANT_REQUEST = "INSERT_APPLICANT_REQUEST";
export const INSERT_APPLICANT_SUCCESS = "INSERT_APPLICANT_SUCCESS";
export const INSERT_APPLICANT_FAILURE = "INSERT_APPLICANT_FAILURE";

/** applicant - delete */
export const DELETE_APPLICANT_REQUEST = "DELETE_APPLICANT_REQUEST";
export const DELETE_APPLICANT_SUCCESS = "DELETE_APPLICANT_SUCDESS";
export const DELETE_APPLICANT_FAILURE = "DELETE_APPLICANT_FAILURE";

/** applicant question - list */
export const LIST_QUESTION_REQUEST = "LIST_QUESTION_REQUEST";
export const LIST_QUESTION_SUCCESS = "LIST_QUESTION_SUCCESS";
export const LIST_QUESTION_FAILURE = "LIST_QUESTION_FAILURE";

/** applicant question - insert */
export const INSERT_QUESTION_REQUEST = "INSERT_QUESTION_REQUEST";
export const INSERT_QUESTION_SUCCESS = "INSERT_QUESTION_SUCCESS";
export const INSERT_QUESTION_FAILURE = "INSERT_QUESTION_FAILURE";

/** applicant question - update */
export const UPDATE_QUESTION_REQUEST = "UPDATE_QUESTION_REQUEST";
export const UPDATE_QUESTION_SUCCESS = "UPDATE_QUESTION_SUCCESS";
export const UPDATE_QUESTION_FAILURE = "UPDATE_QUESTION_FAILURE";

/** applicant question - delete */
export const DELETE_QUESTION_REUQEST = "DELETE_QUESTION_REUQEST";
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAILURE = "DELETE_QUESTION_FAILURE";

/** employer answer - insert */
export const INSERT_ANSWER_REQUEST = "INSERT_ANSWER_REQUEST";
export const INSERT_ANSWER_SUCCESS = "INSERT_ANSWER_SUCCESS";
export const INSERT_ANSWER_FAILURE = "INSERT_ANSWER_FAILURE";

/** employer answer - update */
export const UPDATE_ANSWER_REQUEST = "UPDATE_ANSWER_REQUEST";
export const UPDATE_ANSWER_SUCCESS = "UPDATE_ANSWER_SUCCESS";
export const UPDATE_ANSWER_FAILURE = "UPDATE_ANSWER_FAILURE";

/** employer answer - delete */
export const DELETE_ANSWER_REQUEST = "DELETE_ANSWER_REQUEST";
export const DELETE_ANSWER_SUCCESS = "DELETE_ANSWER_SUCCESS";
export const DELETE_ANSWER_FAILURE = "DELETE_ANSWER_FAILURE";

// parttime
export interface ListPartTimeRequestAction {
  type: typeof LIST_PARTTIME_REQUEST;
  loading: boolean;
  email: string;
}

export interface ListPartTimeSuccessAction {
  type: typeof LIST_PARTTIME_SUCCESS;
  loading: boolean;
  partTimeList: Array<PartTime>;
}

export interface ListPartTimeFailureAction {
  type: typeof LIST_PARTTIME_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface DetailPartTimeRequestAction {
  type: typeof DETAIL_PARTTIME_REQUEST;
  loading: boolean;
  email: string;
  partTimeId: string;
}

export interface DetailPartTimeSuccessAction {
  type: typeof DETAIL_PARTTIME_SUCCESS;
  loading: boolean;
  selPartTime: PartTime;
}

export interface DetailPartTimeFailureAction {
  type: typeof DETAIL_PARTTIME_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface InsertPartTimeRequestAction {
  type: typeof INSERT_PARTTIME_REQUEST;
  parttime: PartTime;
  question: Array<ApplicantQ>;
}

export interface InsertPartTimeSuccessAction {
  type: typeof INSERT_PARTTIME_SUCCESS;
  loading: boolean;
}

export interface InsertPartTimeFailureAction {
  type: typeof INSERT_PARTTIME_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface UpdatePartTimeRequestAction {
  type: typeof UPDATE_PARTTIME_REQUEST;
  announcementId: string;
  loading: boolean;
  email: string;
  flag: string; // is parttime announcement finished?
  createDate: string;
  company: string; //company id? or company name?
  category: string;
  locationCity: string;
  locatinDistrict: string;
  recruitment: number;
  preferredSex: string;
  preferredAge: Array<number>;
  task: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  salary: Array<string>; // or Array<number>
  etc: EtcOption;
  jobOffer: JobOffer;
  memo: string;
}

export interface UpdatePartTimeSuccessAction {
  type: typeof UPDATE_PARTTIME_SUCCESS;
  loading: boolean;
  announcementId: string;
}

export interface UpdatePartTimeFailureAction {
  type: typeof UPDATE_PARTTIME_FAILURE;
  loading: boolean;
  announcementId: string;
  errMsg: string;
}

export interface DeletePartTimeRequestAction {
  type: typeof DELETE_PARTTIME_REQUEST;
  loading: boolean;
  announcementId: string;
  email: string;
}

export interface DeletePartTimeSuccessAction {
  type: typeof DELETE_PARTTIME_SUCCESS;
  loading: boolean;
}

export interface DeletePartTimeFailureAction {
  type: typeof DELETE_PARTTIME_FAILURE;
  loading: boolean;
  errMsg: string;
}

//applicant (insert, delete)
export interface InsertApplicantRequestAction {
  type: typeof INSERT_APPLICANT_REQUEST;
  email: string;
  loading: boolean;
  annountmentId: string;
  applicantQList: Array<ApplicantQ>;
}

export interface InsertApplicantSuccessAction {
  type: typeof INSERT_APPLICANT_SUCCESS;
  loading: boolean;
}

export interface InsertApplicantFailureAction {
  type: typeof INSERT_APPLICANT_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface DeleteApplicantRequestAction {
  type: typeof DELETE_APPLICANT_REQUEST;
  email: string;
  loading: boolean;
  announcementId: string;
}

export interface DeleteApplicantSuccessAction {
  type: typeof DELETE_APPLICANT_SUCCESS;
  loading: boolean;
}

export interface DeleteApplicantFailureAction {
  type: typeof DELETE_APPLICANT_FAILURE;
  loading: string;
  errMsg: string;
}

//applicant - question
export interface InsertQuestionRequestAction {
  type: typeof INSERT_QUESTION_REQUEST;
  announcementId: string;
  eamil: string;
  loading: boolean;
  contactUserId: string;
  contactName: string;
  contactDate: string;
  contactData: string;
}

export interface InsertQuestionSuccessAction {
  type: typeof INSERT_QUESTION_SUCCESS;
  loading: boolean;
}

export interface InsertQuestionFailureAction {
  type: typeof INSERT_QUESTION_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface ListQuestionRequestAction {
  type: typeof LIST_QUESTION_REQUEST;
  loading: boolean;
  announcementId: string;
  email: string;
}

export interface ListQuestionSuccessAction {
  type: typeof LIST_QUESTION_SUCCESS;
  loading: boolean;
  questionList: Array<Question>;
}

export interface ListQuestionFailureAction {
  type: typeof LIST_QUESTION_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface UpdateQuestionRequestAction {
  type: typeof UPDATE_QUESTION_REQUEST;
  announcementId: string;
  eamil: string;
  loading: boolean;
  questionId: string;
  contactUserId: string;
  contactName: string;
  contactDate: string;
  contactData: string;
}

export interface UpdateQuestionSuccessAction {
  type: typeof UPDATE_QUESTION_SUCCESS;
  loading: boolean;
}

export interface UpdateQuestionFailureAction {
  type: typeof UPDATE_QUESTION_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface DeleteQuestionRequestAction {
  type: typeof DELETE_QUESTION_REUQEST;
  announcementId: string;
  email: string;
  questionId: string;
  loading: boolean;
}

export interface DeleteQuestionSuccessAction {
  type: typeof DELETE_QUESTION_SUCCESS;
  loading: boolean;
}

export interface DeleteQuestionFailureAction {
  type: typeof DELETE_QUESTION_FAILURE;
  loading: boolean;
  errMsg: string;
}

//employer - answer
export interface InsertAnswerRequestAction {
  type: typeof INSERT_ANSWER_REQUEST;
  loading: boolean;
  email: string;
  questionId: string;
  announcementId: string;
  contactComment: string;
}

export interface InsertAnswerSuccessAction {
  type: typeof INSERT_ANSWER_SUCCESS;
  loading: boolean;
}

export interface InsertAnswerFailureAction {
  type: typeof INSERT_ANSWER_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface UpdateAnswerRequestAction {
  type: typeof UPDATE_ANSWER_REQUEST;
  loading: boolean;
  email: string;
  questionId: string;
  announcementId: string;
  contactComment: string;
}

export interface UpdateAnswerSuccessAction {
  type: typeof UPDATE_ANSWER_SUCCESS;
  loading: boolean;
}

export interface UpdateAnswerFailurAction {
  type: typeof UPDATE_ANSWER_FAILURE;
  loading: boolean;
  errMsg: string;
}

export interface DeleteAnswerRequestAction {
  type: typeof DELETE_ANSWER_REQUEST;
  loading: boolean;
  email: string;
  questionId: string;
  announcementId: string;
}

export interface DeleteAnswerSuccessAction {
  type: typeof DELETE_ANSWER_SUCCESS;
  loading: boolean;
}

export interface DeleteAnswerFailureAction {
  type: typeof DELETE_ANSWER_FAILURE;
  loading: boolean;
  errMsg: string;
}

export type ListPartTimeActionTypes =
  | ListPartTimeRequestAction
  | ListPartTimeSuccessAction
  | ListPartTimeFailureAction;

export type DetailPartTimeActionTypes =
  | DetailPartTimeRequestAction
  | DetailPartTimeSuccessAction
  | DetailPartTimeFailureAction;

export type InsertPartTimeActionTypes =
  | InsertPartTimeRequestAction
  | InsertPartTimeSuccessAction
  | InsertPartTimeFailureAction;

export type UpdatePartTimeActionTypes =
  | UpdatePartTimeRequestAction
  | UpdatePartTimeSuccessAction
  | UpdatePartTimeFailureAction;

export type DeletePartTimeActionTypes =
  | DeletePartTimeRequestAction
  | DeletePartTimeSuccessAction
  | DeletePartTimeFailureAction;

export type InsertApplicantActionTypes =
  | InsertApplicantRequestAction
  | InsertApplicantSuccessAction
  | InsertApplicantFailureAction;

export type DeleteApplicantActionTypes =
  | DeleteApplicantRequestAction
  | DeleteApplicantSuccessAction
  | DeleteApplicantFailureAction;

export type ListQuestionActionTypes =
  | ListQuestionRequestAction
  | ListQuestionSuccessAction
  | ListQuestionFailureAction;

export type InsertQuestionActionTypes =
  | InsertQuestionRequestAction
  | InsertQuestionSuccessAction
  | InsertQuestionFailureAction;

export type UpdateQuestionActionTypes =
  | UpdateQuestionRequestAction
  | UpdateQuestionSuccessAction
  | UpdateQuestionFailureAction;

export type DeleteQuestionActionTypes =
  | DeleteQuestionRequestAction
  | DeleteQuestionSuccessAction
  | DeleteQuestionFailureAction;

export type InsertAnswerActionTypes =
  | InsertAnswerRequestAction
  | InsertAnswerSuccessAction
  | InsertAnswerFailureAction;

export type UpdateAnswerActionTypes =
  | UpdateAnswerRequestAction
  | UpdateAnswerSuccessAction
  | UpdateAnswerFailurAction;

export type DeleteAnswerActionTyprs =
  | DeleteAnswerRequestAction
  | DeleteAnswerSuccessAction
  | DeleteAnswerFailureAction;

export type PartTimeActionTypes =
  | ListPartTimeActionTypes
  | DetailPartTimeActionTypes
  | InsertPartTimeActionTypes
  | UpdatePartTimeActionTypes
  | DeletePartTimeActionTypes
  | InsertApplicantActionTypes
  | DeleteApplicantActionTypes
  | ListQuestionActionTypes
  | InsertQuestionActionTypes
  | UpdateQuestionActionTypes
  | DeleteQuestionActionTypes
  | InsertAnswerActionTypes
  | UpdateAnswerActionTypes
  | DeleteAnswerActionTyprs;
