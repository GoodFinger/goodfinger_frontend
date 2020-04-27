import axios from "axios";

export const client1 = axios.create({
  baseURL: "http://54.180.102.186",
});

export const client2 = axios.create({
  baseURL: "http://54.180.102.186:8080",
});

client1.defaults.headers.post["Content-Type"] = "application/json";
client2.defaults.headers.post["Content-Type"] = "application/json";
