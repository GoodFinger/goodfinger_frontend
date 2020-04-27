import React from "react";
import styled from "styled-components";
import Step from "./Step";

interface StepInfo {
  step: number;
}

function Steps({ step }: StepInfo) {
  const stepArr = [
    { value: 1, title: "공고등록" },
    { value: 2, title: "모집조건" },
    { value: 3, title: "상세정보" },
    { value: 4, title: "미리보기" }
  ];
  return (
    <Wrapper>
      {stepArr.map((stepInfo, idx) => (
        <StepWrapper key={stepInfo.title} idx={idx} arrLength={stepArr.length}>
          <Step value={stepInfo.value} now={step} title={stepInfo.title} />
        </StepWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

interface WrapperProps {
  idx: number;
  arrLength: number;
}

const StepWrapper = styled.div<WrapperProps>`
  display: inline-block;
  text-align: center;
  margin-right: ${({ idx, arrLength }) => idx + 1 !== arrLength && `10%`};
`;
export default Steps;
