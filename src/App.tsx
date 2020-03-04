import React from "react";
import { Route } from "react-router-dom";

import BossLayout from "components/boss/BossLayout";

import LoginContainer from "containers/login/LoginContainer";
import SignupContainer from "containers/login/SignupContainer";
import PartTimeListContainer from "containers/boss/PartTimeListContainer";
import CompanyListContainer from "containers/company/CompanyListContainer";
import CompanyAddContainer from "containers/company/CompanyAddContainer";
import PartTimeAddContainer from "containers/boss/PartTimeAddContainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <BossLayout exact path="/companyList" component={CompanyListContainer} />
      <BossLayout exact path="/companyAdd" component={CompanyAddContainer} />
      <BossLayout exact path="/parttimeList" component={PartTimeListContainer} />
      <BossLayout exact path="/parttimeAdd" component={PartTimeAddContainer} />
    </>
  );
};

export default App;
