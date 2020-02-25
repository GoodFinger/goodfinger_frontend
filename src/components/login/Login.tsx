import React from "react";
import styled from "styled-components";
import BackgroundImg from "img/bg5.jpg";
import LoginForm from "./LoginForm";

interface LoginProps {
  email: string;
  password: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getUserLogin: (e: React.MouseEvent) => void;
}

const Login: React.FC<LoginProps> = ({ email, password, setEmail, setPassword, getUserLogin }) => {
  return (
    <MainDiv>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        getUserLogin={getUserLogin}
      />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  background: url(${BackgroundImg}) center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Login;
