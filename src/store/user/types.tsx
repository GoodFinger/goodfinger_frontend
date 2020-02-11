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
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";

interface LoginUserAction {
  type: typeof LOGIN_USER;
  email: string;
  password: string;
}

interface SignUpUserAction {
  type: typeof SIGNUP_USER;
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
}

export type UserActionTypes = LoginUserAction | SignUpUserAction;
