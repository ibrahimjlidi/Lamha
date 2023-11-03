import {  Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/SignUpCard";
import LoginCard from "../components/LoginCard";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  // useSetRecoilState(authScreenAtom);

  return (
<div>
{authScreenState === "login" ? <LoginCard/> : <SignupCard/>} 
</div>
  )
}

export default AuthPage;