import React from "react";
import styled from "styled-components";

interface Footer {}
const BossFooter: React.FC<Footer> = () => {
  return (
    <FooterWrapper>
      <FooterTitle>Developers</FooterTitle>
      <table>
        <tr>
          <DeveloperTitle>Front Engineer</DeveloperTitle>
          <td>유은정</td>
        </tr>
        <tr>
          <DeveloperTitle>Back Engineer</DeveloperTitle>
          <td>박예연</td>
          <td>이효진</td>
          <td>홍대표</td>
        </tr>
      </table>
      <ProjectName>@GoodFinger Project</ProjectName>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: #534871;
  color: #ffffff;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const DeveloperTitle = styled.td`
  padding: 0 20px;
`;

const ProjectName = styled.div`
  float: right;
  bottom: 20px;
  position: absolute;
  right: 20px;
  font-style: italic;
  font-weight: bold;
`;

export default BossFooter;
