/** import types */
import { LIST_PARTTIME_REQUEST } from "./types";

export const getPartTimeList = ({ email }: { email: string }) => ({
  type: LIST_PARTTIME_REQUEST,
  email
});
