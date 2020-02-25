import React, { useEffect } from "react";
import Login from "components/login/Login";
import useInput from "lib/useInput";
import axios from "axios";

interface User {}

const LoginContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  useEffect(() => {
    console.log(email, password);
  });

  const getUserLogin = () => {
    axios
      .get("http://54.180.102.186:8080/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {});

    axios
      .get("http://54.180.102.186/yy")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {});
  };

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      getUserLogin={getUserLogin}
    ></Login>
  );
};

export default LoginContainer;
