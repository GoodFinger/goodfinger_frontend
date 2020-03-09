import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import useInput from "lib/useInput";
import { RootState } from "store";
import CompanyAddForm from "components/boss/CompanyAddForm";
import { insertComapny } from "store/company/actions";

interface Company {}
interface Error {
  target: string;
  errorMsg: string;
}

const CompanyAddContainer: React.FC<Company> = () => {
  const { email } = useSelector((state: RootState) => state.user);
  const [name, setName] = useInput("");
  const [location, setLocation] = useInput("");
  const [error, setError] = useState<Array<Error>>([]);
  const [imageList, setImageList] = useState<Array<File>>([]);
  const dispatch = useDispatch();

  const addCompany = () => {
    const errorList: Array<Error> = validationCheck(name, location);

    if (errorList.length === 0) {
      dispatch(insertComapny({ email, name, location, imageList }));
    } else {
      setError(errorList);
      return;
    }
  };

  const addImageList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files ? e.target.files[0] : null;

    if (value) {
      setImageList(imageList.concat(value));
    } else {
      return;
    }
  };

  const validationCheck = (name: string, location: string) => {
    const errorList: Array<Error> = [];
    if (!name) {
      errorList.push({ target: "name", errorMsg: "❖ 근무지명을(를) 입력해주세요." });
    }

    if (!location) {
      errorList.push({ target: "location", errorMsg: "❖ 근무장소을(를) 입력해주세요." });
    }

    return errorList;
  };

  return (
    <CompanyAddWrapper>
      <CompanyAddForm
        addCompany={addCompany}
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation}
        imageList={imageList}
        addImageList={addImageList}
        error={error}
      ></CompanyAddForm>
    </CompanyAddWrapper>
  );
};

const CompanyAddWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px 130px 20px;
`;

export default CompanyAddContainer;
