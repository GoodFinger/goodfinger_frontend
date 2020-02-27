/** import types */
import { LOGIN_USER_REQUEST, SIGNUP_USER_REQUEST } from "./types";

/** TypeScript infers that this function is returning LoginUserAction */
export const loginUser = ({ email, password }: { email: string; password: string }) => ({
  type: LOGIN_USER_REQUEST,
  email,
  password
});

export const signupUser = ({
  email,
  password,
  name,
  birth,
  isBoss
}: {
  email: string;
  password: string;
  name: string;
  birth: string;
  isBoss: boolean;
}) => ({
  type: SIGNUP_USER_REQUEST,
  email,
  password,
  name,
  birth,
  isBoss
});
