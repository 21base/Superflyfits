import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background: ${(props) => props.theme.colors.white};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 400px;
  padding: 30px 40px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 10px 22px 4px rgba(0, 0, 0, 0.09);
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Action = styled.div`
  width: 50%;
  text-transform: capitalize;
  border-bottom: ${(props) =>
    props.type === "signIn" && `2px solid ${props.theme.colors.secondary}`};
  color: ${(props) =>
    props.type === "signIn"
      ? props.theme.colors.secondary
      : props.theme.colors.dark_grey};
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const SignInOptions = styled.div`
  margin-bottom: 10px;
`;

const SignOption = styled.div`
  text-align: center;
  padding: 8px 0;
  border: 1px solid ${(props) => props.theme.colors.lighter_secondary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;

    &:last-child {
      fill: #4267b2;
    }
  }
`;

const OrContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const OrLine = styled.div`
  width: 150px;
  height: 1px;
  background: ${(props) => props.theme.colors.lighter_secondary};
`;

const OrText = styled.h3`
  padding: 0 15px;
  font-size: 1rem;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputHolder = styled.div`
  display: ${(props) => props.df === "flex" && "flex"};
  align-items: ${(props) => props.df === "flex" && "center"};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lighter_secondary};
  padding: 10px 25px;
`;

const ShowPassword = styled.button`
  position: absolute;
  right: 20px;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;

// const Error = styled.p``;

const SubmitBtn = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 4px;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const BottomAction = styled.div`
  display: flex;
  align-items: center;
`

const ForgotPassWordContainer = styled.div`
  width: 40%;
`

const ForgotPassword = styled.a`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.secondary};
`

const AccContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: right;
`

const AccText = styled.p`
  font-size: 0.7rem;
  margin-right: 5px;
`

const AccLink = styled.a`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.secondary};
`

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Form action="#">
          <Actions>
            <Action type={"signIn"}>sign in</Action>
            <Action>sign up</Action>
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
              <Input placeholder="example@gmail.com" />
            </InputHolder>
            <InputHolder df="flex">
              <Input placeholder="password123" />
              <ShowPassword>Show</ShowPassword>
            </InputHolder>
          </InputContainer>
          <SubmitBtn>sign in</SubmitBtn>
          <BottomAction>
            <ForgotPassWordContainer>
              <ForgotPassword href="#">Forgot password?</ForgotPassword>
            </ForgotPassWordContainer>
            <AccContainer>
              <AccText>Don't have an account?</AccText>
              <AccLink href="#">sign up</AccLink>
            </AccContainer>
          </BottomAction>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;
