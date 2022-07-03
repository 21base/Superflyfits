import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
`;

const SubHead = styled.p`
  color: ${(props) => props.theme.colors.dark_grey};
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const InputHolder = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.dark_grey};
  width: calc(100% - 100px);
  padding: 15px 20px;
  border-radius: 4px 0 0 4px;
`;

const SubmitBtn = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0 4px 4px 0;
  width: 100px;
  padding: 16px 0;
`;

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <SubHead>Get emailed anytime a new product is added</SubHead>
        <InputHolder>
          <Input placeholder="example@gmail.com" />
          <SubmitBtn>Submit</SubmitBtn>
        </InputHolder>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
