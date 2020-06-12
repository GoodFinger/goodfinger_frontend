import axios from "axios";

export const client1 = axios.create({
  baseURL: process.env.REACT_APP_CLIENT_API1,
});

export const client2 = axios.create({
  baseURL: process.env.REACT_APP_CLIENT_API2,
});

export const client3 = axios.create({
  baseURL: process.env.REACT_APP_CLIENT_API3,
});

client1.defaults.headers.post["Content-Type"] = "application/json";
client2.defaults.headers.post["Content-Type"] = "application/json";
client3.defaults.headers.post["Content-Type"] = "application/json";
