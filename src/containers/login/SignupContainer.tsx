import React, { useState } from "react";
import Signup from "../../components/login/Signup";
import useInput from "../../lib/useInput";

interface User {}

const SignupContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [userName, setUserName] = useInput("");
  const [birth, setBirth] = useInput("");
  const [userType, setUserType] = useState("");

  const onChangeType = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;

    if (id === "back") {
      setUserType("");
    } else {
      setUserType(id);
    }
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
