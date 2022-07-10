import { useState } from "react";
import styled from "styled-components";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.white};
  opacity: ${(props) => props.type === "signUp" && "0"};
`;

const Login = () => {
  const [slideState, setSlideState] = useState({
    signInSlide: "slideLeft",
    signUpSlide: "right",
  });

  const slide = (para1,para2) => {
    setSlideState({
      signInSlide: para1,
      signUpSlide: para2,
    });
  }

  return (
    <Container>
      <Signin slideSignUp={slide} slidingState={slideState.signInSlide} />
      <Signup slideSignIn={slide} slidingState={slideState.signUpSlide} />
    </Container>
  );
};

export default Login;
