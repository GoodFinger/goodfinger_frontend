import React, { useState } from "react";
import Signup from "components/login/Signup";
import useInput from "lib/useInput";
import { useDispatch } from "react-redux";
import { submitUser } from "store/user/actions";

interface User {}

const SignupContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [userName, setUserName] = useInput("");
  const [birth, setBirth] = useInput("");
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();

  const onChangeType = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;

    if (id === "back") {
      setUserType("");
    } else {
      setUserType(id);
    }
  };

  const insertUser = () => {
    try {
      dispatch(submitUser(email, password, userName, birth, userType));
    } catch (err) {
      console.log(err);
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
      insertUser={insertUser}
    ></Signup>
  );
};

export default SignupContainer;
