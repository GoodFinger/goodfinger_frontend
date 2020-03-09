import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getCompanyList } from "store/company/actions";
import { CompanyList } from "store/company/types";
import CompanyCard from "components/boss/CompanyCard";
import { push } from "lib/historyUtils";

interface Company {
  companyList: Array<CompanyList>;
}

const CompanyListContainer: React.FC<Company> = () => {
  const [loading, setLoading] = useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const { companyList } = useSelector((state: RootState) => state.company);
  const dispatch = useDispatch();

  const onCompanyAdd = () => {
    push("/companyAdd");
  };

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
          <div>
            <AddBtn onClick={onCompanyAdd}>근무지 추가</AddBtn>
          </div>
          {companyList.map(company => (
            <CompanyCard company={company} key={company.id} />
          ))}
        </CompanyListWrapper>
      )}
    </div>
  );
};

const CompanyListWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px 130px 20px;
`;

const AddBtn = styled.span`
  padding: 5px 10px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`;

export default CompanyListContainer;
