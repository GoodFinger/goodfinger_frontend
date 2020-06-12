/** import types */
import {
  LIST_COMPANY_REQUEST,
  DETAIL_COMPANY_REQUEST,
  INSERT_COMPANY_REQUEST,
  DELETE_COMPANY_REQUEST,
  UPDATE_COMPANY_REQUEST,
} from "./types";

export const getCompanyList = ({ email }: { email: string }) => ({
  type: LIST_COMPANY_REQUEST,
  email,
});

export const getCompanyDetail = ({ email, comId }: { email: string; comId: string }) => ({
  type: DETAIL_COMPANY_REQUEST,
  email,
  comId,
});

export const insertComapny = ({
  mastername,
  email,
  name,
  location,
  imageList,
}: {
  mastername: string;
  email: string;
  name: string;
  location: string;
  imageList: Array<File>;
}) => ({
  type: INSERT_COMPANY_REQUEST,
  mastername,
  email,
  name,
  location,
  imageList,
});

export const updateCompany = ({
  email,
  id,
  name,
  location,
  imageList,
  mastername,
  picture,
}: {
  email: string;
  id: string;
  name: string;
  location: string;
  imageList: Array<File>;
  mastername: string;
  picture: Array<string>;
}) => ({
  type: UPDATE_COMPANY_REQUEST,
  email,
  id,
  name,
  location,
  imageList,
  mastername,
  picture,
});

export const deleteCompany = ({ email, id }: { email: string; id: string }) => ({
  type: DELETE_COMPANY_REQUEST,
  email,
  id,
});
