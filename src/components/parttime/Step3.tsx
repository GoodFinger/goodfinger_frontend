import React from "react";
import styled from "styled-components";
import { ApplicantQ, PartTimeInfo } from "store/parttime/types";

interface Step3Props {
  question: Array<ApplicantQ>;
  partTimeInfo: Array<PartTimeInfo>;
  addQuestion: () => void;
  removeQuestion: (e: React.MouseEvent<HTMLElement>) => void;
  handleQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePartTimeInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  moveNext: () => void;
  moveBack: () => void;
}

function Step3({
  question,
  partTimeInfo,
  addQuestion,
  removeQuestion,
  moveNext,
  moveBack,
  handleQuestionChange,
  handlePartTimeInfoChange,
}: Step3Props) {
  return (
    <div>
      <div>
        <button onClick={moveBack}>뒤로가기</button>
      </div>
      <div>
        <div>설명</div>
        {/** parttime info */}
        {partTimeInfo.map((data) => (
          <div key={data.id}>
            <div>
              {data.title}
              <Star>*</Star>
            </div>
            <div>
              <input
                type="text"
                value={data.content}
                onChange={handlePartTimeInfoChange}
                data-infoid={data.id}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>사전질문</div>
        <div>
          <button onClick={addQuestion}>질문 추가</button>
        </div>
        <div>
          {question.map((data, idx) => (
            <div key={data.applicantQId}>
              <div>추가질문 {idx + 1}</div>
              <div>
                <input
                  type="text"
                  value={data.applicantQContent}
                  onChange={handleQuestionChange}
                  data-questionid={data.applicantQId}
                />
                <button onClick={removeQuestion} data-questionid={data.applicantQId}>
                  질문 삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={partTimeInfo.filter((data) => !data.content).length > 0 ? undefined : moveNext}
        >
          MoveNext
        </button>
      </div>
    </div>
  );
}

const Star = styled.span`
  color: red;
`;
export default Step3;
