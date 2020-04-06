import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ParttimeList } from "store/parttime/types";
import { RootState } from "store";
import { getPartTimeList } from "store/parttime/actions";
import PartTimeCard from "components/parttime/PartTimeCard";

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
        <Wrapper>
          {partTimeList.map(partTime => (
            <PartTimeCard key={partTime.announcementId} partTime={partTime} />
          ))}
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px 130px 20px;
`;
export default PartTimeListContainer;
