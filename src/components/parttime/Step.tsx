import React from "react";
import styled, { css } from "styled-components";

interface StepInfo {
  value: number;
  now: number;
  title: string;
}

const Step: React.FC<StepInfo> = ({ value, now, title }) => {
  return (
    <>
      <Circle now={now} value={value}>
        {value}
      </Circle>
      <Title now={now} value={value}>
        {title}
      </Title>
    </>
  );
};

interface StepProps {
  now: number;
  value: number;
}
const Circle = styled.div<StepProps>`
  padding: 5px 10px;
  display: inline-block;
  border: ${({ now, value }) => (now === value ? `2px solid purple` : `2px solid #d9d9d5`)};
  border-radius: 25px;
`;

const Title = styled.div<StepProps>`
  ${({ now, value }) =>
    now === value &&
    css`
      font-weight: bold;
    `}
`;
export default Step;
