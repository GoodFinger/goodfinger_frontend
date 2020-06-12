import { client1, client2, client3 } from "./client";

export const insertCompany = async ({ data }: { data: any }) => {
  const response = await client1.post("/com/insert", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const updateCompany = async ({ data }: { data: any }) => {
  const response = await client1.post("/com/update", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const deleteCompany = async ({ comId }: { comId: string }) => {
  const response = await client1.post("/com/delete?comId=" + comId);
  return response;
};

export const getCompanyDetail = async ({ comId }: { comId: string }) => {
  const response = await client1.get("/com/company", { params: { comId } });

  return response;
};

export const register = async (data: any) => {
  const response = await client2.post("/signUp", data);
  return response;
};

export const getCompanyList = async ({ email }: { email: string }) => {
  const response = await client1.get("/com/companys", {
    params: { masterId: email },
  });

  return response;
};

export const userLogin = async (data: any) => {
  const response = await client2.post("/signIn", data);
  return response;
};

export const userLogout = (email: string) => {
  const response = client2.post("/logOut", { params: { email } });
  return response;
};

export const testPartTime = () => {
  const response = client3.get("/hello");
  return response;
};
