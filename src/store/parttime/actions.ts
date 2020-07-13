/** import types */
import { LIST_PARTTIME_REQUEST, INSERT_PARTTIME_REQUEST, PartTime, ApplicantQ } from "./types";

export const getPartTimeList = ({ email }: { email: string }) => ({
  type: LIST_PARTTIME_REQUEST,
  email,
});

export const addPartTime = ({
  parttime,
  question,
}: {
  parttime: PartTime;
  question: Array<ApplicantQ>;
}) => ({
  type: INSERT_PARTTIME_REQUEST,
  parttime,
  question,
});
