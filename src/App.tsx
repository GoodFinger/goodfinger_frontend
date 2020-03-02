import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BossLayout from "components/boss/BossLayout";

import LoginContainer from "containers/login/LoginContainer";
import SignupContainer from "containers/login/SignupContainer";
import BossMain from "containers/boss/BossMain";
import CompanyListContainer from "containers/boss/CompanyListContainer";
import CompanyAddContainer from "containers/boss/CompanyAddContainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <BossLayout exact path="/companyList" component={CompanyListContainer} />
      <BossLayout exact path="/companyAdd" component={CompanyAddContainer} />
    </>
  );
};

export default App;
