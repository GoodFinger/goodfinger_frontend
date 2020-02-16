import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./containers/login/LoginContainer";
import SignupContainer from "./containers/login/SignupContainer";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
    </Router>
  );
};

export default App;
