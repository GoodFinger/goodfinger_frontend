import React from "react";
import styled from "styled-components";
import "../../goodfinger.scss";

interface FormProps {
  name: string;
  placeholder: string;
  type: string;
  changeAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  iconSrc: string;
  alertMessage: string;
}

const FormInput: React.FC<FormProps> = ({
  name,
  placeholder,
  type,
  changeAction,
  value,
  isValid,
  iconSrc,
  alertMessage
}) => {
  return (
    <>
      <FormDiv>
        <span>
          <Icon src={iconSrc} alt="user-icon" />
        </span>
        <InputDesign
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={changeAction}
          value={value}
          isValid={isValid}
        ></InputDesign>
      </FormDiv>

      {value && !isValid ? (
        <AlertMessage>{alertMessage}</AlertMessage>
      ) : (
        <AlertMessage>&nbsp;</AlertMessage>
      )}
    </>
  );
};

const AlertMessage = styled.div`
  font-size: 10px;
  color: #f51c1c;
  height: 14px;
`;

const Icon = styled.img`
  width: 24px;
  margin-right: 10px;
  vertical-align: middle;
`;

interface ValidProps {
  isValid: boolean;
}

const FormDiv = styled.div`
  height: 40px;
  width: 100%;
  display: inline-block;
`;

const InputDesign = styled.input<ValidProps>`
  border: none;
  padding-bottom: 5px;
  padding-top: 10px;
  width: 61%;
  font-size: 14px;
  border-bottom: 1px solid #909090;
`;

export default FormInput;
