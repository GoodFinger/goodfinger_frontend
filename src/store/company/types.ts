/** type checking state*/
export interface CompanyList {
  companyList: Array<Company>;
  loading: boolean;
  selCompany: Company;
}

export interface Company {
  id: string;
  name: string;
  location: string;
  mastername: string;
  masterId: string;
  picture: Array<string>;
}

/** define action */
/** list */
export const LIST_COMPANY_REQUEST = "LIST_COMPANY_REQUEST";
export const LIST_COMPANY_SUCCESS = "LIST_COMPANY_SUCCESS";
export const LIST_COMPANY_FAILURE = "LIST_COMPANY_FAILURE";

/** detail */
export const DETAIL_COMPANY_REQUEST = "DETAIL_COMPANY_REQUEST";
export const DETAIL_COMPANY_SUCCESS = "DETAIL_COMPANY_SUCCESS";
export const DETAIL_COMPANY_FAILURE = "DETAIL_COMPANY_FAILURE";

/** insert */
export const INSERT_COMPANY_REQUEST = "INSERT_COMPANY_REQUEST";
export const INSERT_COMPANY_SUCCESS = "INSERT_COPMANY_SUCCESS";
export const INSERT_COMPANY_FAILURE = "INSERT_COPMANY_FAILURE";

/** update */
export const UPDATE_COMPANY_REQUEST = "UPDATE_COMPANY_REQUEST";
export const UPDATE_COMPANY_SUCCESS = "UPDATE_COPMANY_SUCCESS";
export const UPDATE_COMPANY_FAILURE = "UPDATE_COMPANY_FAILURE";

/** delete */
export const DELETE_COMPANY_REQUEST = "DELETE_COMPANY_REQUEST";
export const DELETE_COMPANY_SUCCESS = "DELETE_COMPANY_SUCCESS";
export const DELETE_COMPANY_FAILURE = "DELETE_COMPANY_FAILURE";

export interface ListCompanyRequestAction {
  type: typeof LIST_COMPANY_REQUEST;
  email: string;
  loading: boolean;
}

export interface ListCompanySuccessAction {
  type: typeof LIST_COMPANY_SUCCESS;
  email: string;
  companyList: Array<Company>;
  loading: boolean;
}

export interface ListCompanyFailureAction {
  type: typeof LIST_COMPANY_FAILURE;
  loading: boolean;
}

export interface DetailCompanyRequestAction {
  type: typeof DETAIL_COMPANY_REQUEST;
  email: string;
  id: string;
  loading: boolean;
}

export interface DetailCompanySuccessAction {
  type: typeof DETAIL_COMPANY_SUCCESS;
  selCompany: Company;
  loading: boolean;
}

export interface DetailCompanyFailureAction {
  type: typeof DETAIL_COMPANY_FAILURE;
  loading: boolean;
}

export interface InsertCompanyRequestAction {
  type: typeof INSERT_COMPANY_REQUEST;
  mastername: string;
  loading: boolean;
  email: string;
  name: string;
  location: string;
  imageList: Array<string>;
}

export interface InsertCompanySuccessAction {
  type: typeof INSERT_COMPANY_SUCCESS;
  loading: boolean;
  email: string;
  name: string;
  location: string;
  imageList: Array<string>;
}

export interface InsertCompanyFailureAction {
  type: typeof INSERT_COMPANY_FAILURE;
  loading: boolean;
}

export interface UpdateCompanyRequestAction {
  type: typeof UPDATE_COMPANY_REQUEST;
  email: string;
  id: string;
  name: string;
  location: string;
  imageList: Array<string>;
  loading: boolean;
}

export interface UpdateCompanySuccessAction {
  type: typeof UPDATE_COMPANY_SUCCESS;
  email: string;
  id: string;
  name: string;
  location: string;
  imageList: Array<string>;
  loading: boolean;
}

export interface UpadteCompanyFailureAction {
  type: typeof UPDATE_COMPANY_FAILURE;
  loading: boolean;
}

export interface DeleteCompanyRequestAction {
  type: typeof DELETE_COMPANY_REQUEST;
  loading: boolean;
  email: string;
  id: string;
}

export interface DeleteCompanySuccessAction {
  type: typeof DELETE_COMPANY_SUCCESS;
  loading: boolean;
  id: string;
}

export interface DeleteCompanyFailureAction {
  type: typeof DELETE_COMPANY_FAILURE;
  loading: boolean;
}

export type ListCompanyActionTypes =
  | ListCompanyRequestAction
  | ListCompanySuccessAction
  | ListCompanyFailureAction;

export type DetailCompanyActionTypes =
  | DetailCompanyRequestAction
  | DetailCompanySuccessAction
  | DetailCompanyFailureAction;

export type InsertCompanyActionTypes =
  | InsertCompanyRequestAction
  | InsertCompanySuccessAction
  | InsertCompanyFailureAction;

export type UpdateComapnyActionTypes =
  | UpdateCompanyRequestAction
  | UpdateCompanySuccessAction
  | UpadteCompanyFailureAction;

export type DeleteCompanyActionTypes =
  | DeleteCompanyRequestAction
  | DeleteCompanySuccessAction
  | DeleteCompanyFailureAction;

export type CompanyActionTypes =
  | ListCompanyActionTypes
  | DetailCompanyActionTypes
  | InsertCompanyActionTypes
  | UpdateComapnyActionTypes
  | DeleteCompanyActionTypes;
