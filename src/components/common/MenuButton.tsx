import React from "react";
import styled from "styled-components";
import { push } from "lib/historyUtils";

interface MenuProps {
  name: string;
  url: string;
  image: string;
}

const MenuButton: React.FC<MenuProps> = ({ name, url, image }) => {
  const onChangeMenu = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    push(id);
  };

  return (
    <MenuWrapper>
      <MenuDiv onClick={onChangeMenu} id={url}>
        <MenuCircle>
          <img src={image} alt="menus" />
        </MenuCircle>
        <MenuTitle>{name}</MenuTitle>
      </MenuDiv>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: inline-block;
  width: 25%;
  text-align: center;
  padding: 10px 0;
`;
const MenuDiv = styled.div`
  display: inline-block;
`;

const MenuCircle = styled.div`
  background-color: #ffffff;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50%;
  & img {
    width: 25px;
  }
`;

const MenuTitle = styled.div`
  text-align: center;
`;

export default MenuButton;
