import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  AccContainer,
  AccLink,
  AccText,
  Action,
  Actions,
  BottomAction,
  Form,
  Input,
  InputContainer,
  InputHolder,
  InputPass,
  OrContainer,
  OrLine,
  OrText,
  ShowPasswordOrNot,
  SignInOptions,
  SignOption,
  SubmitBtn,
  Title,
} from "./FormComponents";
import { useState } from "react";

const Signup = ({ slideSignIn, slidingState }) => {
  const [typeVal, setTypeVal] = useState("password");

  const showPassword = () => {
    setTypeVal("text");
  };

  const hidePassword = () => {
    setTypeVal("password");
  };
  return (
    <Form action="#" checkSlide={slidingState}>
      <Actions>
        <Action onClick={() => slideSignIn("slideRight", "right")}>
          sign in
        </Action>
        <Action type={"signUp"}>sign up</Action>
      </Actions>
      <Title>Sign up to Superfly</Title>
      <SignInOptions>
        <SignOption>
          <FcGoogle /> Sign up with Google
        </SignOption>
        <SignOption>
          <BsFacebook /> Sign up with Facebook
        </SignOption>
      </SignInOptions>
      <OrContainer>
        <OrLine></OrLine>
        <OrText>or</OrText>
        <OrLine></OrLine>
      </OrContainer>
      <InputContainer>
        <InputHolder>
          <Input type="text" placeholder="example@gmail.com" />
        </InputHolder>
        {/* <Error>Email is not recognized sign up</Error> */}
        <InputHolder>
          <InputPass>
            <Input type={typeVal} placeholder="password123" />
            {typeVal === "password" && (
              <ShowPasswordOrNot onClick={showPassword}>Show</ShowPasswordOrNot>
            )}
            {typeVal === "text" && (
              <ShowPasswordOrNot onClick={hidePassword}>Hide</ShowPasswordOrNot>
            )}
          </InputPass>
        </InputHolder>
        {/* <Error>Incorrect password check and retry</Error> */}
      </InputContainer>
      <SubmitBtn>sign up</SubmitBtn>
      <BottomAction>
        <AccContainer>
          <AccText>Already have an account?</AccText>
          <AccLink onClick={() => slideSignIn("slideRight", "right")}>
            sign in
          </AccLink>
        </AccContainer>
      </BottomAction>
    </Form>
  );
};

export default Signup;
