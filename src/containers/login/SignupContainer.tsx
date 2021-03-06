import React, { useState } from "react";
import Signup from "components/login/Signup";
import useInput from "lib/useInput";
import { useDispatch } from "react-redux";
import { signupUser } from "store/user/actions";

interface User {}

const SignupContainer: React.FC<User> = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [userName, setUserName] = useInput("");
  const [birth, setBirth] = useInput("");
  const [sex, setSex] = useState("F");
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

  const onChangeSex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSex(value);
  };

  const insertUser = () => {
    try {
      const name = userName;
      const isBoss = userType === "boss" ? true : false;
      dispatch(signupUser({ email, password, name, birth, isBoss, sex }));
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
      sex={sex}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      setBirth={setBirth}
      onChangeType={onChangeType}
      insertUser={insertUser}
      onChangeSex={onChangeSex}
    ></Signup>
  );
};

export default SignupContainer;
