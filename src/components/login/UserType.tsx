import React from "react";
import styled from "styled-components";
import "../../goodfinger.scss";

interface UserTypeProps {
  userType: string;
  onChangeType: (e: React.MouseEvent) => void;
}

const UserType: React.FC<UserTypeProps> = ({ userType, onChangeType }) => {
  return (
    <Layout className="">
      <div>Signup GoodFinger</div>
      <div>Usertype</div>
      <div onClick={onChangeType} id="boss">
        Boss
      </div>
      <div onClick={onChangeType} id="parttime">
        Part-time
      </div>
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

export default UserType;
