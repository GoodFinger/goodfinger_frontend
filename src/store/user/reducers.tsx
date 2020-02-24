/** import types */
import { User, LOGIN_USER, SIGNUP_USER, UserActionTypes } from "./types";

const initialState: User = {
  email: "",
  password: "",
  name: "",
  image: "",
  birth: "",
  isBoss: false,
  introduction: "",
  partTimeHistory: []
};

const reducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        birth: action.birth,
        isBoss: action.isBoss
      };
    default:
      return state;
  }
};

export default reducer;
