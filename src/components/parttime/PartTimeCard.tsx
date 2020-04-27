import React from "react";
import styled from "styled-components";
import { PartTime } from "store/parttime/types";
import cakeImage from "img/cake.png";

interface PartTimeAction {
  partTime: PartTime;
}
function PartTimeCard({ partTime }: PartTimeAction) {
  const dateClipping = (date: string) => {
    const dateArr = date.split("-");
    const month = dateArr[1];
    const day = dateArr[2];

    return month + "월 " + day + "일";
  };

  return (
    <PartTimeWrapper id={partTime.announcementId}>
      <TopWrapper>
        <ImageWrapper>
          {partTime.imageList.length !== 0 ? (
            // <img src={company.imageList[0]} alt="company" />
            <img src={cakeImage} alt="no_image" />
          ) : (
            <img src={cakeImage} alt="no_image" />
          )}
        </ImageWrapper>
        <PartTimeInfo>
          <PartTimeName>{partTime.company}</PartTimeName>
          <PartTimeTask>{partTime.locationCity + " " + partTime.locatinDistrict}</PartTimeTask>
          <PartTimeTask>
            {partTime.category.map(type => (
              <Type key={type}>{type}</Type>
            ))}
          </PartTimeTask>
        </PartTimeInfo>
      </TopWrapper>
      <PartTimeTask>
        <div>유의사항</div>
        <div>{partTime.task}</div>
      </PartTimeTask>
      <TimeTable>
        <thead>
          <tr>
            <td>근무시작일</td>
            <td>근무시간</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dateClipping(partTime.startDate) + " ~ " + dateClipping(partTime.endDate)}</td>
            <td>{partTime.startTime + " ~ " + partTime.endTime}</td>
          </tr>
          <tr>
            <td colSpan={2}>{partTime.salary[0] + " : " + partTime.salary[1]}</td>
          </tr>
        </tbody>
      </TimeTable>
      <Button>지원자보기</Button>
    </PartTimeWrapper>
  );
}

const PartTimeWrapper = styled.div`
  border: 2px solid #c5bdda;
  border-radius: 10px;
  width: 86%;
  margin: auto;
  padding: 10px 0px 0px;
  max-width: 490px;
`;

const TopWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin-left: 10px;
  padding: 10px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-radius: 25px;

  & img {
    width: 48px;
  }
`;

const PartTimeInfo = styled.div`
  margin-left: 10px;
  display: inline-block;
  margin-left: 5%;
  vertical-align: sub;
  width: 60%;
`;

const PartTimeName = styled.div`
  font-weight: bold;
`;

const PartTimeTask = styled.div`
  margin-top: 10px;
  margin-left: 10px;

  & div {
    margin-bottom: 10px;
  }
`;

const Type = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  padding: 3px 10px;
  text-align: center;
  display: inline-block;
  margin-right: 5px;
`;

const TimeTable = styled.table`
  margin-left: 10px;
  margin-bottom: 33px;
  width: 100%;
`;

const Button = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;
export default PartTimeCard;
