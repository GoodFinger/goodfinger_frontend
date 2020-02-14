import React from "react";
import styled from "styled-components";
import emailIcon from "../../img/envelope.png";
import passwordIcon from "../../img/closed-lock.png";
import "../../goodfinger.scss";

interface LoginProps {
  email: string;
  password: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginProps> = ({ email, password, setEmail, setPassword }) => {
  return (
    <Layout className="loginform">
      <div className="logo content">Good Finger</div>
      <div className="content">Log in to your account</div>
      <div className="submitform">
        <div>
          <span>
            <Icon src={emailIcon} alt="email-icon" />
          </span>
          <FormDiv>
            <FormInput
              name="email"
              placeholder="email"
              type="text"
              onChange={setEmail}
              value={email}
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
      </div>
      <LoginBtn>Login</LoginBtn>
      <div className="signup">
        <div>You don't have account?</div>
        <SignUpLink>create account</SignUpLink>
      </div>
    </Layout>
  );
};

const LoginBtn = styled.div`
  margin-top: 37px;
  display: inline-block;
  width: 60%;
  padding: 8px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:hover {
    background-color: #615d81;
    color: white;
  }
`;

const SignUpLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
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

const FormDiv = styled.div`
  height: 40px;
  position: relative;
  border-bottom: 1px solid #909090;
  width: 65%;
  margin-top: 10px;
  display: inline-block;
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

export default LoginForm;
