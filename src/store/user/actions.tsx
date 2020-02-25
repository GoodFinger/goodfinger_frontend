/** import types */
import { User, LOGIN_USER, SIGNUP_USER, UserActionTypes } from "./types";
import { Dispatch } from "react";
import { bindActionCreators } from "redux";

/** TypeScript infers that this function is returning LoginUserAction */
export const loginUser = ({ email, password }: { email: string; password: string }) => ({
  type: LOGIN_USER,
  email,
  password
});

export const signupUser = ({
  type,
  email,
  password,
  name,
  birth,
  isBoss
}: {
  type: typeof SIGNUP_USER;
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
}) => ({
  type,
  email,
  password,
  name,
  birth,
  isBoss
});

export const submitUser = (
  email: string,
  password: string,
  name: string,
  birth: string,
  userType: string
) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    const isBoss = userType === "boss" ? true : false;
    const type = SIGNUP_USER;
    console.log(type, email, password, name, birth, isBoss);
    dispatch(signupUser({ type, email, password, name, birth, isBoss }));
  };
};
