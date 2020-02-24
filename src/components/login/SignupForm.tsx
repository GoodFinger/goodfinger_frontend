import React from "react";
import styled, { css } from "styled-components";
import "../../goodfinger.scss";
import historyBack from "../../img/back.png";
import emailIcon from "../../img/envelope.png";
import passwordIcon from "../../img/closed-lock.png";
import userIcon from "../../img/user.png";
import cakeIcon from "../../img/cake.png";
import { emailValidation, birthValidation } from "../../lib/formValidation";
import FormInput from "../common/FormInput";

interface SignupProps {
  email: string;
  password: string;
  userName: string;
  birth: string;
  userType: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBirth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeType: (e: React.MouseEvent) => void;
  insertUser: (e: React.MouseEvent) => void;
}

const SignupForm: React.FC<SignupProps> = ({
  email,
  password,
  userName,
  birth,
  userType,
  setEmail,
  setPassword,
  setUserName,
  setBirth,
  onChangeType,
  insertUser
}) => {
  const isEmailForm = emailValidation(email);
  const isBirthForm = birthValidation(birth);

  return (
    <Layout className="">
      <BackDiv>
        <img id="back" onClick={onChangeType} src={historyBack} alt="history back" />
      </BackDiv>
      <SignupTitle>Signup GoodFinger</SignupTitle>
      <div>
        <FormInput
          name="email"
          placeholder="email"
          type="text"
          changeAction={setEmail}
          value={email}
          isValid={isEmailForm}
          iconSrc={emailIcon}
          alertMessage="이메일 형식이 맞지 않습니다."
        ></FormInput>
        <FormInput
          name="userName"
          placeholder="name"
          type="text"
          changeAction={setUserName}
          value={userName}
          isValid={true}
          iconSrc={userIcon}
          alertMessage=""
        ></FormInput>
        <FormInput
          name="password"
          placeholder="password"
          type="password"
          changeAction={setPassword}
          value={password}
          isValid={true}
          iconSrc={passwordIcon}
          alertMessage=""
        ></FormInput>
        <FormInput
          name="birth"
          placeholder="birthday(1999-01-03)"
          type="text"
          changeAction={setBirth}
          value={birth}
          isValid={isBirthForm}
          iconSrc={cakeIcon}
          alertMessage="형식(1999-01-03)이 맞지 않습니다."
        ></FormInput>
      </div>
      <div>
        {!isBirthForm || !isEmailForm || !password || !userName ? (
          <SignupIcon
            isBirthForm={isBirthForm}
            isEmailForm={isEmailForm}
            password={password}
            name={userName}
          >
            Sign up
          </SignupIcon>
        ) : (
          <SignupIcon
            isBirthForm={isBirthForm}
            isEmailForm={isEmailForm}
            password={password}
            name={userName}
            onClick={insertUser}
          >
            Sign up
          </SignupIcon>
        )}
      </div>
    </Layout>
  );
};

interface buttonDisable {
  isBirthForm: boolean;
  isEmailForm: boolean;
  password: string;
  name: string;
}

const SignupIcon = styled.span<buttonDisable>`
  padding: 20px;
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #8f908f;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  ${({ isBirthForm, isEmailForm, password, name }) =>
    (!isBirthForm || !isEmailForm || !password || !name) &&
    css`
      background-color: #d9d9d9;
    `}

  &:hover {
    ${({ isBirthForm, isEmailForm, password, name }) => {
      if (!isBirthForm || !isEmailForm || !password || !name) {
        return css`
          background-color: #d9d9d9;
          color: black;
        `;
      } else {
        return css`
          background-color: #615d81;
          color: white;
        `;
      }
    }}
  }
`;
const BackDiv = styled.div`
  text-align: left;

  & img {
    width: 27px;
    cursor: pointer;
  }
`;

const SignupTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
`;

const Layout = styled.div`
  background-color: #ffffff;
  width: 35%;
  height: 343px;
  text-align: center;
  padding: 20px;
  box-shadow: 7px 4px 7px #7b7b7b;
  min-width: 250px;
`;

export default SignupForm;
