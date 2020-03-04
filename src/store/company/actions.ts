/** import types */
import {
  LIST_COMPANY_REQUEST,
  DETAIL_COMPANY_REQUEST,
  INSERT_COMPANY_REQUEST,
  DELETE_COMPANY_REQUEST,
  UPDATE_COMPANY_REQUEST
} from "./types";

export const getCompanyList = ({ email }: { email: string }) => ({
  type: LIST_COMPANY_REQUEST,
  email
});

export const getCompanyDetail = ({ email, id }: { email: string; id: string }) => ({
  type: DETAIL_COMPANY_REQUEST,
  email,
  id
});

export const insertComapny = ({
  email,
  name,
  location
}: {
  email: string;
  name: string;
  location: string;
}) => ({
  type: INSERT_COMPANY_REQUEST,
  email,
  name,
  location
});

export const updateCompany = ({
  email,
  id,
  name,
  location
}: {
  email: string;
  id: string;
  name: string;
  location: string;
}) => ({
  type: UPDATE_COMPANY_REQUEST,
  email,
  id,
  name,
  location
});

export const deleteCompany = ({ email, id }: { email: string; id: string }) => ({
  type: DELETE_COMPANY_REQUEST,
  email,
  id
});
