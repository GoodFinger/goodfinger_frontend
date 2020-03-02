import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./containers/login/LoginContainer";
import SignupContainer from "./containers/login/SignupContainer";
import CompanyListContainer from "./containers/boss/CompanyListContainer";
import CompanyAddContainer from "./containers/boss/CompanyAddContainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/companyList" component={CompanyListContainer} />
      <Route exact path="/companyAdd" component={CompanyAddContainer} />
    </>
  );
};

export default App;
