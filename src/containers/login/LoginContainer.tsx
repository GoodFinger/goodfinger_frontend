import React, { useEffect } from "react";
import Login from "components/login/Login";
import useInput from "lib/useInput";
import { useDispatch } from "react-redux";
import { loginUser } from "store/user/actions";

interface User {}

const LoginContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(email, password);
  });

  const getUserLogin = () => {
    dispatch(loginUser({ email, password }));
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
