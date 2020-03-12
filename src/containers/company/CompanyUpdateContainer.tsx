import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import useInput from "lib/useInput";
import CompanyAddForm from "components/boss/CompanyAddForm";
import { updateCompany, getCompanyDetail } from "store/company/actions";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}
interface Error {
  target: string;
  errorMsg: string;
}

/**CompanyUpdateContainer.tsx */
const CompanyUpdateContainer: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { email } = useSelector((state: RootState) => state.user);
  const { selCompany } = useSelector((state: RootState) => state.company);
  const { id } = match.params;
  const [name, setName] = useInput(selCompany.name);
  const [location, setLocation] = useInput(selCompany.location);
  const [error, setError] = useState<Array<Error>>([]);
  const [imageList, setImageList] = useState<Array<File>>(selCompany.imageList);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  console.log(name, location);
  useEffect(() => {
    setLoading(true);
    dispatch(getCompanyDetail({ email, id }));
    setLoading(false);
    return () => {};
  }, [dispatch, email, id]);

  const onUpdate = () => {
    const errorList: Array<Error> = validationCheck(name, location);

    if (errorList.length === 0) {
      dispatch(updateCompany({ id, email, name, location, imageList }));
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
      {loading && <div>now loading</div>}
      {!loading && (
        <CompanyAddForm
          addCompany={onUpdate}
          name={name}
          setName={setName}
          location={location}
          setLocation={setLocation}
          imageList={imageList}
          addImageList={addImageList}
          error={error}
        ></CompanyAddForm>
      )}
    </CompanyAddWrapper>
  );
};

const CompanyAddWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px 130px 20px;
`;

export default CompanyUpdateContainer;
