import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/Login";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
    </Router>
  );
};

export default App;
