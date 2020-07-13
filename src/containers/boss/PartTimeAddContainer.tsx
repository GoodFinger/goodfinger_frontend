import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Steps from "components/parttime/Steps";
import Step1 from "components/parttime/Step1";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyList } from "store/company/actions";
import { RootState } from "store";
import useInput from "lib/useInput";
import { addPartTime } from "store/parttime/actions";
import { PartTime, ApplicantQ, PartTimeInfo } from "store/parttime/types";
import Step2 from "components/parttime/Step2";
import Step3 from "components/parttime/Step3";
import Step4 from "components/parttime/Step4";
import { randomStr } from "lib/common";

interface PartTimeProps {}
const PartTimeAddContainer: React.FC<PartTimeProps> = () => {
  const { email } = useSelector((state: RootState) => state.user);
  const { companyList } = useSelector((state: RootState) => state.company);
  const { setPartTime } = useSelector((state: RootState) => state.partTime);

  const [step, setStep] = useState(1);
  const [company, setCompany] = useState(companyList[0] ? companyList[0].id : "");
  const [category, setCategory] = useState<Array<string>>([]);
  const [startDate, setStartDate] = useInput("");
  const [endDate, setEndDate] = useInput("");
  const [startTime, setStartTime] = useInput("00:00");
  const [endTime, setEndTime] = useInput("23:55");
  const [salaryType, setSalaryType] = useState("time");
  const [salaryVal, setSalaryVal] = useState(0);
  const [etc, setEtc] = useState({ salaryRightNow: "ok", breaktime: "ok", oneDayWorker: "no" });
  const [recruitment, setRecruitment] = useState(0);
  const [preferredSex, setPreferredSex] = useState("female");
  const [preferredAge, setPreferredAge] = useState<Array<number>>([]);
  const [preferredFlag, setPreferredFlag] = useState(false);
  const [question, setQuestion] = useState<Array<ApplicantQ>>([]);
  const [partTimeInfo, setPartTimeInfo] = useState<Array<PartTimeInfo>>(setPartTime.partTimeInfo);
  const dispatch = useDispatch();

  const moveNext = () => {
    setStep(step + 1);
  };

  const moveBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  //근무지 리스트, 카테고리 가져오기
  useEffect(() => {
    dispatch(getCompanyList({ email }));
  }, []);

  const changeEtcVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const option = {
      ...etc,
      salaryRightNow: id === "salaryRightNow" ? (checked ? "ok" : "no") : etc.salaryRightNow,
      breaktime: id === "breakTime" ? (checked ? "ok" : "no") : etc.breaktime,
      oneDayWorker: id === "oneDayWorker" ? (checked ? "ok" : "no") : etc.oneDayWorker,
    };

    setEtc(option);
  };

  const changeComapy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCompany(value);
  };

  const changeSalaryVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSalaryVal(Number(value));
  };

  const changeSalaryType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSalaryType(value);
  };

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (id) {
      if (checked) {
        setCategory(category.concat(id));
      } else {
        setCategory(category.filter((data) => data !== id));
      }
    }
  };

  const handlePreferredSex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPreferredSex(value);
  };

  const handlePreferredAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (preferredFlag) {
      const { checked, value } = e.target;

      if (checked) {
        setPreferredAge(preferredAge.concat(Number(value)));
      } else {
        setPreferredAge(preferredAge.filter((data) => data !== Number(value)));
      }
    }
  };

  const handlePreferredFlag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;

    if (id === "preferred_no") {
      setPreferredFlag(false);
    } else {
      setPreferredFlag(true);
    }
  };

  const handleRecruitment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!value) {
      setRecruitment(0);
    } else {
      setRecruitment(Number(value));
    }
  };

  const onSumbit = () => {
    const parttime = {
      flag: "N",
      company,
      category,
      recruitment,
      preferredSex,
      preferredAge,
      task: "text",
      startDate,
      endDate,
      startTime,
      endTime,
      salary: [salaryType, salaryVal],
      etc,
      jobOffer: { introduction: "test", picture: [] },
      picture: [],
      memo: "ihihihi",
      applicant_questions: [],
      partTimeInfo,
    } as PartTime;

    dispatch(addPartTime({ parttime, question }));
  };

  const addQuestion = () => {
    setQuestion(question.concat({ applicantQId: randomStr(), applicantQContent: "" }));
  };

  const removeQuestion = (e: React.MouseEvent<HTMLElement>) => {
    const questionid = e.currentTarget.getAttribute("data-questionid");

    setQuestion(question.filter((data) => data.applicantQId !== questionid));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const { questionid } = dataset;

    setQuestion(
      question.map((data) => {
        if (questionid === data.applicantQId) {
          data.applicantQContent = value;
        }

        return data;
      })
    );
  };

  const handlePartTimeInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const { infoid } = dataset;

    setPartTimeInfo(
      partTimeInfo.map((data) => {
        if (data.id === infoid) {
          data.content = value;
        }
        return data;
      })
    );
  };

  return (
    <Wrapper>
      <Steps step={step} />
      {step === 1 && (
        <Step1
          company={company}
          category={category}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
          salaryType={salaryType}
          salaryVal={salaryVal}
          etc={etc}
          moveNext={moveNext}
          changeEtcVal={changeEtcVal}
          companyList={companyList}
          changeComapy={changeComapy}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          changeSalaryVal={changeSalaryVal}
          changeSalaryType={changeSalaryType}
          changeCategory={changeCategory}
        />
      )}
      {step === 2 && (
        <Step2
          recruitment={recruitment}
          preferredSex={preferredSex}
          preferredAge={preferredAge}
          preferredFlag={preferredFlag}
          handleRecruitment={handleRecruitment}
          handlePreferredSex={handlePreferredSex}
          handlePreferredAge={handlePreferredAge}
          handlePreferredFlag={handlePreferredFlag}
          moveNext={moveNext}
          moveBack={moveBack}
        />
      )}
      {step === 3 && (
        <Step3
          question={question}
          addQuestion={addQuestion}
          removeQuestion={removeQuestion}
          partTimeInfo={partTimeInfo}
          handlePartTimeInfoChange={handlePartTimeInfoChange}
          handleQuestionChange={handleQuestionChange}
          moveNext={moveNext}
          moveBack={moveBack}
        />
      )}
      {step === 4 && <Step4 />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default PartTimeAddContainer;
