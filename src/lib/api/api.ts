import { client1, client2 } from "./client";

export const insertCompany = async ({ data }: { data: any }) => {
  const response = await client1.post("/com/insert", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const getCompanyDetail = async ({ masterId }: { masterId: string }) => {
  const response = await client1.get("/com/company", { params: { masterId } });

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
