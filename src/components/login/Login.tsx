import React, { memo } from "react";
import styled from "styled-components";
import BackgroundImg from "../../img/bg5.jpg";

const Login: React.FC = memo(() => {
  return <MainDiv>hello</MainDiv>;
});

const MainDiv = styled.div`
  background: url(${BackgroundImg}) center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Login;
