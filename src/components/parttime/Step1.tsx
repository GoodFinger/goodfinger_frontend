import React from "react";
import styled from "styled-components";
import { EtcOption } from "store/parttime/types";
import { Company } from "store/company/types";
import { TextField } from "@material-ui/core";

interface Step1Props {
  company: string;
  category: Array<string>;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  salaryType: string;
  salaryVal: number;
  etc: EtcOption;
  companyList: Array<Company>;
  moveNext: (e: React.MouseEvent) => void;
  changeEtcVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeComapy: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStartTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEndTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSalaryVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSalaryType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Step1({
  company,
  category,
  startDate,
  endDate,
  startTime,
  endTime,
  salaryType,
  salaryVal,
  etc,
  moveNext,
  changeEtcVal,
  companyList,
  changeComapy,
  setStartDate,
  setEndDate,
  setStartTime,
  setEndTime,
  changeSalaryVal,
  changeSalaryType,
  changeCategory,
}: Step1Props) {
  const nextFlag = startDate !== "" && endDate !== "" && category.length > 0;
  return (
    <Wrapper>
      <InputLine>
        <span>근무지</span>
        <select onChange={changeComapy} value={company}>
          {companyList.map((data) => (
            <option key={data.id} value={data.id} selected={data.id === company}>
              {data.name}
            </option>
          ))}
        </select>
      </InputLine>
      <InputLine>
        <span>업종</span>
        <input
          type="checkbox"
          name="test"
          id="serving"
          checked={category.includes("serving")}
          onChange={changeCategory}
        />
        <label htmlFor="serving">서빙</label>
      </InputLine>
      <InputLine>
        <span>날짜</span>
        <TextField
          id="startDate"
          label="시작날짜"
          type="date"
          value={startDate}
          onChange={setStartDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        ~
        <TextField
          id="endDate"
          label="종료날짜"
          type="date"
          value={endDate}
          onChange={setEndDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </InputLine>
      <InputLine>
        <span>시간</span>
        <TextField
          label="시작시간"
          type="time"
          value={startTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={setStartTime}
        />
        ~
        <TextField
          label="종료시간"
          type="time"
          value={endTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={setEndTime}
        />
      </InputLine>
      <InputLine>
        <span>급여</span>
        <input
          type="radio"
          name="salary"
          value="time"
          checked={salaryType === "time"}
          onChange={changeSalaryType}
        />{" "}
        시급
        <input
          type="radio"
          name="salary"
          value="day"
          checked={salaryType === "day"}
          onChange={changeSalaryType}
        />{" "}
        일급
        <input type="text" value={salaryVal} onChange={changeSalaryVal} /> 원
      </InputLine>
      <InputLine>
        <span>기타</span>
        <input
          type="checkbox"
          checked={etc.salaryRightNow === "ok"}
          id="salaryRightNow"
          onChange={changeEtcVal}
        />{" "}
        당일 지급
        <input
          type="checkbox"
          checked={etc.breaktime === "ok"}
          id="breaktime"
          onChange={changeEtcVal}
        />{" "}
        무급휴게시간있음
        <input
          type="checkbox"
          checked={etc.oneDayWorker === "ok"}
          id="oneDayWorker"
          onChange={changeEtcVal}
        />{" "}
        일용근로자신고업체
      </InputLine>
      <ButtonWrapper>
        <Button onClick={nextFlag ? moveNext : undefined} movePermit={nextFlag}>
          MoveNext
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const InputLine = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 25px;
`;

interface ButtonProps {
  movePermit: boolean;
}

const Button = styled.span`
  padding: 10px 43px;
  background-color: ${({ movePermit }: ButtonProps) => (movePermit ? `green` : `grey`)};
  cursor: pointer;
  &:hover {
    background-color: ${({ movePermit }: ButtonProps) => (movePermit ? `red` : `grey`)};
  }
`;

export default Step1;
