import React, { useEffect, useState } from "react";
import Signup from "../../components/login/Signup";
import useInput from "../../lib/useInput";

interface User {}

const SignupContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [userName, setUserName] = useInput("");
  const [birth, setBirth] = useInput("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    console.log(email, password, userName, birth);
  });

  const onChangeType = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    setUserType(id);
  };

  return (
    <Signup
      email={email}
      password={password}
      userName={userName}
      birth={birth}
      userType={userType}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      setBirth={setBirth}
      onChangeType={onChangeType}
    ></Signup>
  );
};

export default SignupContainer;
