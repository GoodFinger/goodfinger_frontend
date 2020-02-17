import React from "react";
import styled from "styled-components";
import "../../goodfinger.scss";
import boss from "../../img/man.png";
import parttime from "../../img/curriculum-vitae.png";

interface UserTypeProps {
  userType: string;
  onChangeType: (e: React.MouseEvent) => void;
}

const UserType: React.FC<UserTypeProps> = ({ userType, onChangeType }) => {
  return (
    <Layout className="usertype">
      <SignupTitle>Signup GoodFinger</SignupTitle>
      <Step1>사용자 유형을 선택하세요.</Step1>
      <UserSelect onClick={onChangeType} id="boss">
        <UserTypeIcon>
          <img src={boss} alt="boss" />
        </UserTypeIcon>
        <UserTypeText>Boss</UserTypeText>
      </UserSelect>
      <UserSelect onClick={onChangeType} id="parttime">
        <UserTypeIcon>
          <img src={parttime} alt="parttime" />
        </UserTypeIcon>
        <UserTypeText>Part-time</UserTypeText>
      </UserSelect>
    </Layout>
  );
};

const UserTypeText = styled.div`
  margin-top: 10px;
`;
const UserTypeIcon = styled.div`
  margin-top: 59px;
`;
const SignupTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  height: 45px;
`;

const Step1 = styled.div`
  margin-bottom: 10px;
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

const UserSelect = styled.div`
  width: 40%;
  display: inline-block;
  border: 1px solid #8a8a8a;
  border-radius: 9px;
  height: 230px;
  vertical-align: middle;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #7084ac;
    color: white;
  }
`;
export default UserType;
