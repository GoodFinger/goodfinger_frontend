import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./containers/login/LoginContainer";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={LoginContainer} />
    </Router>
  );
};

export default App;
