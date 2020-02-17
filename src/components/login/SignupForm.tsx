import React from "react";
import styled from "styled-components";
import "../../goodfinger.scss";
import historyBack from "../../img/back.png";
import emailIcon from "../../img/envelope.png";
import passwordIcon from "../../img/closed-lock.png";
import userIcon from "../../img/user.png";
import cakeIcon from "../../img/cake.png";

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
  onChangeType
}) => {
  return (
    <Layout className="">
      <BackDiv>
        <img id="back" onClick={onChangeType} src={historyBack} alt="history back" />
      </BackDiv>
      <SignupTitle>Signup GoodFinger</SignupTitle>
      <div>
        <div>
          <span>
            <Icon src={emailIcon} alt="email-icon" />
            <FormDiv>
              <FormInput
                name="email"
                placeholder="email"
                type="text"
                onChange={setEmail}
                value={email}
              ></FormInput>
            </FormDiv>
          </span>
        </div>
        <div>
          <span>
            <Icon src={userIcon} alt="user-icon" />
          </span>
          <FormDiv>
            <FormInput
              name="userName"
              placeholder="name"
              type="text"
              onChange={setUserName}
              value={userName}
            ></FormInput>
          </FormDiv>
        </div>
        <div>
          <span>
            <Icon src={passwordIcon} alt="password-icon" />
          </span>
          <FormDiv>
            <FormInput
              name="password"
              placeholder="password"
              type="password"
              onChange={setPassword}
              value={password}
            ></FormInput>
          </FormDiv>
        </div>
        <div>
          <span>
            <Icon src={cakeIcon} alt="cake-icon" />
          </span>
          <FormDiv>
            <FormInput
              name="birth"
              placeholder="birhday"
              type="text"
              onChange={setBirth}
              value={birth}
            ></FormInput>
          </FormDiv>
        </div>
      </div>
      <div>
        <SignupIcon>Sign up</SignupIcon>
      </div>
    </Layout>
  );
};

const SignupIcon = styled.span`
  padding: 20px;
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #8f908f;
  border-radius: 10px;
  margin-top: 28px;
  cursor: pointer;
  &:hover {
    background-color: #615d81;
    color: white;
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

const Icon = styled.img`
  width: 24px;
  margin-right: 10px;
`;

const FormInput = styled.input`
  border: none;
  padding-bottom: 5px;
  padding-top: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
`;

const FormDiv = styled.div`
  height: 40px;
  position: relative;
  border-bottom: 1px solid #909090;
  width: 65%;
  margin-top: 10px;
  display: inline-block;
`;

export default SignupForm;
