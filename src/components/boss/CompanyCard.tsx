import React from "react";
import styled from "styled-components";
import { Company } from "store/company/types";
import cakeImage from "img/cake.png";

interface CompanyAction {
  onCompanyDelete: (e: React.MouseEvent<HTMLElement>) => void;
  onCompanyUpdate: (e: React.MouseEvent<HTMLElement>) => void;
  company: Company;
}

const CompanyCard: React.FC<CompanyAction> = ({ company, onCompanyDelete, onCompanyUpdate }) => {
  return (
    <CardWrapper id={company.id}>
      <CompanyImage>
        {company.picture && company.picture.length !== 0 ? (
          <img src={"http://54.180.102.186" + company.picture[0]} alt="company" />
        ) : (
          <img src={cakeImage} alt="no_image" />
        )}
      </CompanyImage>
      <CompanyDelete data-companyid={company.id} onClick={onCompanyDelete}>
        삭제
      </CompanyDelete>
      <CompanyDelete data-companyid={company.id} onClick={onCompanyUpdate}>
        수정
      </CompanyDelete>
      <CompanyInfo>
        <CompanyName>{company.name}</CompanyName>
        <CompanyLocation>{company.location}</CompanyLocation>
      </CompanyInfo>
      {/* <CompanyButton>근무지 사진 등록하기</CompanyButton> */}
      {/* <CompanyButton>사업자 인증하기</CompanyButton> */}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border: 2px solid #c5bdda;
  border-radius: 10px;
  width: 86%;
  margin: auto;
  padding: 10px;
  max-width: 353px;
`;

const CompanyImage = styled.div`
  padding: 10px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-radius: 25px;

  & img {
    width: 30px;
  }
`;

const CompanyInfo = styled.div`
  display: inline-block;
  margin-left: 5%;
  vertical-align: sub;
  margin-bottom: 25px;
`;

const CompanyName = styled.div`
  font-weight: bold;
`;

const CompanyDelete = styled.div`
  display: inline-block;
  float: right;
  color: gray;
  cursor: pointer;
  margin-left: 10px;
`;

const CompanyLocation = styled.div`
  margin-top: 10px;
`;

// const CompanyButton = styled.div`
//   padding: 10px;
//   text-align: center;
//   width: 80%;
//   margin: auto;
//   border-top: 1px solid #d9d9d9;
//   cursor: pointer;
// `;

export default CompanyCard;
