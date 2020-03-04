import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store";
import { getCompanyList } from "store/company/actions";
import { CompanyList } from "store/company/types";
import CompanyCard from "components/boss/CompanyCard";

interface Company {
  companyList: Array<CompanyList>;
}

const CompanyListContainer: React.FC<Company> = () => {
  const [loading, setLoading] = useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const { companyList } = useSelector((state: RootState) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getCompanyList({ email }));
    setLoading(false);
    return () => {};
  }, [dispatch, email]);
  console.log(companyList);
  return (
    <div>
      {loading && <div>now Loading</div>}
      {!loading && (
        <CompanyListWrapper>
          {companyList.map(company => (
            <CompanyCard company={company} />
          ))}
          <br />
          <div>
            <Link to="/companyAdd">근무지 추가</Link>
          </div>
        </CompanyListWrapper>
      )}
    </div>
  );
};

const CompanyListWrapper = styled.div`
  margin-top: 20px;
`;

export default CompanyListContainer;
