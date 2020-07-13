/** import types */
import {
  LOGIN_USER_REQUEST,
  SIGNUP_USER_REQUEST,
  User,
  SET_USER_INFO,
  LOGOUT_USER_REQUEST,
} from "./types";

/** TypeScript infers that this function is returning LoginUserAction */
export const loginUser = ({ email, password }: { email: string; password: string }) => ({
  type: LOGIN_USER_REQUEST,
  email,
  password,
});

export const signupUser = ({
  email,
  password,
  name,
  birth,
  isBoss,
  sex,
}: {
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
  sex: string;
}) => ({
  type: SIGNUP_USER_REQUEST,
  email,
  password,
  name,
  birth,
  isBoss,
  sex,
});

export const setUserInfo = (data: User) => ({
  type: SET_USER_INFO as typeof SET_USER_INFO,
  data,
});

export const logoutUser = (email: string) => ({
  type: LOGOUT_USER_REQUEST,
  email,
});
