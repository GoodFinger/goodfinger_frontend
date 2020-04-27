import { client1, client2 } from "./client";

export const insertCompany = async ({ data }: { data: any }) => {
  const response = await client1.post("/com/insert", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const getCompanyDetail = async ({ comId }: { comId: string }) => {
  const response = await client1.get("/com/company", { params: { comId: comId } });

  return response;
};

export const register = async (data: any) => {
  const response = await client2.post("/signUp", data);
  console.log(response);

  return response;
};

export const getCompanyList = async ({ email }: { email: string }) => {
  const response = await client1.get("/com/companys", { params: { masterId: email } });

  return response;
};
