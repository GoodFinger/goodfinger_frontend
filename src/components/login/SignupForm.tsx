import React from "react";
import styled from "styled-components";
import "../../goodfinger.scss";

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
      <div>Signup GoodFinger</div>
      <div>Welcome!!! {userType}</div>
    </Layout>
  );
};

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
