import React from "react";
import styled from "styled-components";

import MenuButton from "components/common/MenuButton";

import cakeImage from "img/cake.png";

const BossHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderMax>
        <MenuButton name="공고등록" url="parttimeAdd" image={cakeImage} />
        <MenuButton name="공고내역" url="parttimeList" image={cakeImage} />
        <MenuButton name="근무장소" url="companyList" image={cakeImage} />
        <MenuButton name="알림" url="alert" image={cakeImage} />
      </HeaderMax>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: #534871;
  color: #ffffff;
`;

const HeaderMax = styled.div`
  max-width: 1024px;
  margin: auto;
`;

export default BossHeader;
