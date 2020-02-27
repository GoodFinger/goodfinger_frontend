/** import types */
import {
  User,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  UserActionTypes
} from "./types";

const initialState: User = {
  email: "",
  password: "",
  name: "",
  image: "",
  birth: "",
  isBoss: false,
  introduction: "",
  partTimeHistory: [],
  loading: false
};

const reducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.email,
        password: action.password,
        name: action.name,
        birth: action.birth,
        isBoss: action.isBoss
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.email,
        password: action.password
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
