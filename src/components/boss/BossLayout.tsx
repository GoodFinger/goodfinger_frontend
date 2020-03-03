import React from "react";
import { Route, RouteProps } from "react-router-dom";
import BossHeader from "./BossHeader";
import BossFooter from "./BossFooter";
import styled from "styled-components";
interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const BossLayout = ({ component: Component, ...rest }: IProps) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LayoutWrapper>
          <BossHeader />
          <Component {...matchProps} />
          <BossFooter />
        </LayoutWrapper>
      )}
    />
  );
};

const LayoutWrapper = styled.div`
  postion: relative;
`;

export default BossLayout;
