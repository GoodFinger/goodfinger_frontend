import React, { useState } from "react";
import styled from "styled-components";
import Steps from "components/parttime/Steps";

interface PartTime {}
const PartTimeAddContainer: React.FC<PartTime> = () => {
  const [step, setStep] = useState(1);

  return (
    <Wrapper>
      <Steps step={step} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default PartTimeAddContainer;
