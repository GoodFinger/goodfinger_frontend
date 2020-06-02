import React from "react";
import { Route, RouteProps } from "react-router-dom";
import BossHeader from "./BossHeader";
import BossFooter from "./BossFooter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "store/user/actions";
import { RootState } from "store";
interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const BossLayout = ({ component: Component, ...rest }: IProps) => {
  const { email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser(email));
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LayoutWrapper>
          <BossHeader onLogout={onLogout} />
          <Component {...matchProps} />
          <BossFooter />
        </LayoutWrapper>
      )}
    />
  );
};

const LayoutWrapper = styled.div`
  position: relative;
`;

export default BossLayout;
