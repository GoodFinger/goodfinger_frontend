import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import useInput from "lib/useInput";
import CompanyAddForm from "components/boss/CompanyAddForm";
import { updateCompany } from "store/company/actions";
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
  const [picture, setPicture] = useState<Array<string>>(selCompany.picture);
  const [imageList, setImageList] = useState<Array<File>>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    return () => {};
  }, [dispatch, email, id]);

  const onUpdate = () => {
    const errorList: Array<Error> = validationCheck(name, location);

    if (errorList.length === 0) {
      dispatch(
        updateCompany({
          id,
          email,
          name,
          location,
          imageList,
          mastername: selCompany.mastername,
          picture,
        })
      );
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

  const deleteImageList = (e: React.MouseEvent<HTMLElement>) => {
    const idx = e.currentTarget.dataset.index;
    const { flag } = e.currentTarget.dataset;

    if (flag === "add") {
      setImageList(imageList.filter((image, index) => index !== Number(idx)));
    } else {
      setPicture(picture.filter((image, index) => index !== Number(idx)));
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
          picture={picture}
          addImageList={addImageList}
          deleteImageList={deleteImageList}
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
