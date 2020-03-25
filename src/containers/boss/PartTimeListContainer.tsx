import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParttimeList } from "store/parttime/types";
import { RootState } from "store";
import { getPartTimeList } from "store/parttime/actions";

interface PartTime {
  partTimeList: Array<ParttimeList>;
}

const PartTimeListContainer: React.FC<PartTime> = () => {
  const [loading, setLoading] = useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const { partTimeList } = useSelector((state: RootState) => state.partTime);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getPartTimeList({ email }));
    setLoading(false);
    return () => {};
  }, [dispatch, email]);
  console.log(partTimeList);
  return (
    <div>
      {loading && <div>now Loading</div>}
      {!loading && (
        <div>
          {partTimeList.map(partTime => (
            <div key={partTime.announcementId}>{partTime.announcementId}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartTimeListContainer;
