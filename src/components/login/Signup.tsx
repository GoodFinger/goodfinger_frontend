import React from "react";
import styled from "styled-components";
import BackgroundImg from "img/bg5.jpg";
import SignupForm from "./SignupForm";
import UserType from "./UserType";

interface SignupProps {
  email: string;
  password: string;
  userName: string;
  birth: string;
  userType: string;
  sex: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBirth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSex: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeType: (e: React.MouseEvent) => void;
  insertUser: (e: React.MouseEvent) => void;
}

const Login: React.FC<SignupProps> = ({
  email,
  password,
  userName,
  birth,
  userType,
  sex,
  setEmail,
  setPassword,
  setUserName,
  setBirth,
  onChangeType,
  insertUser,
  onChangeSex
}) => {
  return (
    <MainDiv>
      {userType === "" ? (
        <UserType userType={userType} onChangeType={onChangeType} />
      ) : (
        <SignupForm
          email={email}
          password={password}
          userName={userName}
          birth={birth}
          userType={userType}
          setEmail={setEmail}
          setPassword={setPassword}
          setUserName={setUserName}
          setBirth={setBirth}
          onChangeType={onChangeType}
          insertUser={insertUser}
          sex={sex}
          onChangeSex={onChangeSex}
        />
      )}
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
