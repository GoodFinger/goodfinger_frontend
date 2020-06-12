import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getCompanyList, deleteCompany, getCompanyDetail } from "store/company/actions";
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

  const onCompanyDelete = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const { companyid } = target.dataset;

    const response = window.confirm("정말로 삭제하시겠습니까?");

    if (response && companyid) {
      dispatch(deleteCompany({ email, id: companyid }));
    }
  };

  const onCompanyUpdate = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const id = target.dataset.companyid || "";

    if (id) {
      dispatch(getCompanyDetail({ email, comId: id }));
    }
    //push("/companyUpdate/" + id);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getCompanyList({ email }));
    setLoading(false);
    return () => {};
  }, [dispatch, email]);

  return (
    <div>
      {loading && <div>now Loading</div>}
      {!loading && (
        <CompanyListWrapper>
          <div>
            <AddBtn onClick={onCompanyAdd}>근무지 추가</AddBtn>
          </div>
          {companyList &&
            companyList.map((company) => (
              <CompanyCard
                company={company}
                key={company.id}
                onCompanyDelete={onCompanyDelete}
                onCompanyUpdate={onCompanyUpdate}
              />
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
