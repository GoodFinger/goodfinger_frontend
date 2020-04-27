/** import types */
import {
  CompanyList,
  CompanyActionTypes,
  LIST_COMPANY_REQUEST,
  LIST_COMPANY_SUCCESS,
  LIST_COMPANY_FAILURE,
  DETAIL_COMPANY_REQUEST,
  DETAIL_COMPANY_SUCCESS,
  DETAIL_COMPANY_FAILURE,
  INSERT_COMPANY_REQUEST,
  INSERT_COMPANY_SUCCESS,
  INSERT_COMPANY_FAILURE,
  UPDATE_COMPANY_REQUEST,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAILURE,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAILURE,
} from "./types";

const initialState: CompanyList = {
  companyList: [],
  loading: false,
  selCompany: {
    id: "",
    name: "",
    location: "",
    imageList: [],
    masterId: "",
    mastername: "",
  },
};

const companyReducer = (state = initialState, action: CompanyActionTypes) => {
  switch (action.type) {
    case LIST_COMPANY_REQUEST:
    case DETAIL_COMPANY_REQUEST:
    case UPDATE_COMPANY_REQUEST:
    case DELETE_COMPANY_REQUEST:
    case INSERT_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_COMPANY_FAILURE:
    case DETAIL_COMPANY_FAILURE:
    case INSERT_COMPANY_SUCCESS:
    case INSERT_COMPANY_FAILURE:
    case UPDATE_COMPANY_SUCCESS:
    case UPDATE_COMPANY_FAILURE:
    case DELETE_COMPANY_SUCCESS:
    case DELETE_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LIST_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companyList: action.companyList,
      };
    case DETAIL_COMPANY_SUCCESS:
      return {
        ...state,
        selCompany: action.selCompany,
        loading: false,
      };
    default:
      return state;
  }
};

export default companyReducer;
