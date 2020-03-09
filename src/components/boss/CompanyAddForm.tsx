import React from "react";
import styled, { css } from "styled-components";

interface CompanyProps {
  name: string;
  location: string;
  imageList: Array<File>;
  error: Array<Error>;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLocation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addImageList: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addCompany: () => void;
}

interface Error {
  target: string;
  errorMsg: string;
}

const CompanyAddForm: React.FC<CompanyProps> = ({
  addCompany,
  name,
  setName,
  location,
  setLocation,
  error,
  imageList,
  addImageList
}) => {
  const onAddCompany = () => {
    addCompany();
  };

  const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    addImageList(e);
  };

  return (
    <FormWrapper>
      <FormTitle>근무지 등록</FormTitle>
      <FormDiv>
        <span>근무지명</span>
        <input type="text" name="name" value={name} onChange={setName} />
        <Error>
          {error.map(({ target, errorMsg }) => {
            return target === "name" ? errorMsg : "";
          })}
        </Error>
      </FormDiv>
      <FormDiv>
        <span>근무장소</span>
        <input type="text" name="location" value={location} onChange={setLocation} />
        <Error>
          {error.map(({ target, errorMsg }) => {
            return target === "location" ? errorMsg : "";
          })}
        </Error>
      </FormDiv>
      <FormDiv>
        <ImageTitle>
          사진등록
          <label id="uploadImageBtn" htmlFor="ex_file">
            Upload
          </label>
          <input type="file" name="image" accept="image/*" id="ex_file" onChange={onAddImage} />
        </ImageTitle>
        {imageList.length > 0 ? (
          imageList.map(image => (
            <Image realImage={true} key={image.lastModified}>
              <img src={URL.createObjectURL(image)} alt="company" />
            </Image>
          ))
        ) : (
          <>
            <Image realImage={false}>이미지를 등록하세요</Image>
          </>
        )}
      </FormDiv>
      <FormDiv>
        <Button onClick={onAddCompany}>등록</Button>
      </FormDiv>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  border: 2px solid #c5bdda;
  border-radius: 10px;
  width: 86%;
  margin: auto;
  padding: 10px;
  text-align: center;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 22px;
`;

const FormDiv = styled.div`
  font-size: 15px;
  margin-bottom: 27px;

  & span {
    margin-right: 10px;
  }

  & input {
    font-size: 15px;
    border: none;
    border-bottom: 1px solid gray;
    width: 65%;
  }
`;

const ImageTitle = styled.div`
  margin-bottom: 10px;

  & #uploadImageBtn {
    border: 1px solid #d9d9d9;
    padding: 2px;
    font-size: 12px;
    margin-left: 15px;
  }

  & #ex_file {
    display: none;
  }
`;

interface RealImage {
  realImage: boolean;
}
const Image = styled.div<RealImage>`
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-right: 15px;
  margin-bottom: 15px;
  ${({ realImage }) =>
    !realImage &&
    css`
      line-height: 200px;
    `}
  & img {
    max-width: 200px;
    max-height: 200px;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.div`
  width: 74px;
  padding: 5px 0px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: #b7aecd;
  }
`;

const Error = styled.div`
  color: red;
  font-weight: bold;
`;
export default CompanyAddForm;
