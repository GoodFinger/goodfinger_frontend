/** type checking state */
export interface User {
  email: string;
  password: string;
  name: string;
  image: string;
  birth: string;
  isBoss: boolean;
  introduction: string;
  partTimeHistory: Array<PartTime>;
  loading: boolean;
}

export interface PartTime {
  startDate: string;
  endDate: string;
  contents: string;
  location: string;
  role: string;
  currentlyEmployed: boolean;
}

/** define action */
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const SIGNUP_USER_REQUEST = "SIGNUP_USER_REQUEST";
export const SIGNUP_USER_SUCCESS = "SINGUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";

export interface LoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
  email: string;
  password: string;
  loading: boolean;
}

export interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  email: string;
  password: string;
  loading: boolean;
}

export interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  loading: boolean;
}

export interface SignUpUserRequestAction {
  type: typeof SIGNUP_USER_REQUEST;
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
  loading: boolean;
}

export interface SignUpUserSuccessAction {
  type: typeof SIGNUP_USER_SUCCESS;
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
  loading: boolean;
}

export interface SignUpUserFailureAction {
  type: typeof SIGNUP_USER_FAILURE;
  loading: boolean;
}

export type UserActionTypes =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailureAction
  | SignUpUserRequestAction
  | SignUpUserSuccessAction
  | SignUpUserFailureAction;
