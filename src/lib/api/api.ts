import { client1, client2, client3 } from "./client";

export const insertCompany = ({ data }: { data: any }) => {
  const response = client1.post("/com/insert", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const updateCompany = ({ data }: { data: any }) => {
  const response = client1.post("/com/update", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const deleteCompany = ({ comId }: { comId: string }) => {
  const response = client1.post("/com/delete?comId=" + comId);
  return response;
};

export const getCompanyDetail = ({ comId }: { comId: string }) => {
  const response = client1.get("/com/company", { params: { comId } });

  return response;
};

export const register = (data: any) => {
  const response = client2.post("/signUp", data);
  return response;
};

export const getCompanyList = ({ email }: { email: string }) => {
  const response = client1.get("/com/companys", {
    params: { masterId: email },
  });

  return response;
};

export const userLogin = (data: any) => {
  const response = client2.post("/signIn", data);
  return response;
};

export const userLogout = (email: string) => {
  const response = client2.post("/logOut", { params: { email } });
  return response;
};

export const getPartTimeList = ({ email }: { email: string }) => {
  const response = client3.get("/announcement/list", { params: { email } });
  return response;
};

export const addParttime = (parttime: any) => {
  const response = client3.post("/announcement/insert", parttime);
  return response;
};
