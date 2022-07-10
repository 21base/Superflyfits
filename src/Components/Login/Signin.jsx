import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  AccContainer,
  AccLink,
  AccText,
  Action,
  Actions,
  BottomAction,
  ForgotPassword,
  ForgotPassWordContainer,
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

const Signin = ({ slideSignUp, slidingState }) => {
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
        <Action type={"signIn"}>sign in</Action>
        <Action onClick={() => slideSignUp("left", "slideLeft")}>
          sign up
        </Action>
      </Actions>
      <Title>Sign in to Superfly</Title>
      <SignInOptions>
        <SignOption>
          <FcGoogle /> Sign in with Google
        </SignOption>
        <SignOption>
          <BsFacebook /> Sign in with Facebook
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
      <SubmitBtn>sign in</SubmitBtn>
      <BottomAction>
        <ForgotPassWordContainer>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </ForgotPassWordContainer>
        <AccContainer>
          <AccText>Don't have an account?</AccText>
          <AccLink onClick={() => slideSignUp("left", "slideLeft")}>
            sign up
          </AccLink>
        </AccContainer>
      </BottomAction>
    </Form>
  );
};

export default Signin;
