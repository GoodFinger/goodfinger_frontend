/** import types */
import { User, LOGIN_USER, SIGNUP_USER, UserActionTypes } from "./types";

/** TypeScript infers that this function is returning LoginUserAction */
export const loginUser = ({ email, password }: { email: string; password: string }) => ({
  type: LOGIN_USER,
  email,
  password
});
