import React from "react";
import { Route, RouteProps } from "react-router-dom";
import BossHeader from "./BossHeader";
import BossFooter from "./BossFooter";
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
        <>
          <BossHeader />
          <Component {...matchProps} />
          <BossFooter />
        </>
      )}
    />
  );
};

export default BossLayout;
