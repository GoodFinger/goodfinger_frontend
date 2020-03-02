import React from "react";
import styled from "styled-components";

import MenuButton from "components/common/MenuButton";

import cakeImage from "img/cake.png";

const BossHeader = () => {
  return (
    <HeaderWrapper>
      <MenuButton name="공고등록" url="addParttime" image={cakeImage} />
      <MenuButton name="공고내역" url="parttimeList" image={cakeImage} />
      <MenuButton name="근무장소" url="companyList" image={cakeImage} />
      <MenuButton name="알림" url="alert" image={cakeImage} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: #534871;
  color: #ffffff;
`;

export default BossHeader;
