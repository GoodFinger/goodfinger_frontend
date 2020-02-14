import React, { useEffect } from "react";
import Login from "../../components/login/Login";
import useInput from "../../lib/useInput";

interface User {}

const LoginContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  useEffect(() => {
    console.log(email, password);
  });

  return (
    <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}></Login>
  );
};

export default LoginContainer;
