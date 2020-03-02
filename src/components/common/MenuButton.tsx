import React from "react";
import styled from "styled-components";

interface MenuProps {
  name: string;
  url: string;
  image: string;
}

const MenuButton: React.FC<MenuProps> = ({ name, url, image }) => {
  return <div>{name}</div>;
};

export default MenuButton;
