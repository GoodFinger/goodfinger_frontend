/** import types */
import { LIST_PARTTIME_REQUEST, INSERT_PARTTIME_REQUEST, PartTime } from "./types";

export const getPartTimeList = ({ email }: { email: string }) => ({
  type: LIST_PARTTIME_REQUEST,
  email,
});

export const addPartTime = ({ parttime }: { parttime: PartTime }) => ({
  type: INSERT_PARTTIME_REQUEST,
  parttime,
});
