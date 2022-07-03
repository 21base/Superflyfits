import styled from "styled-components";
import faq from "../Assets/faq.jpg";
import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 50px 0;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const Img = styled.img``;

const RightDiv = styled.div`
  width: 50%;
`;

const TextHolder = styled.div`
  width: 500px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.light_secondary};
  font-weight: 500;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const Help = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <Img src={faq} />
        </LeftDiv>
        <RightDiv>
          <TextHolder>
            <Title>Need help?</Title>
            <Text>
              Finding it hard to navigate through the site, couldn't find what
              you looking for, need to make a request or could not make an order
              or any other problems. We are sorry for the inconvenience and we
              are here to help. You can check out the frequently ask question
              (FAQ) for answers or chat live with one of our representative.
            </Text>
          </TextHolder>
          <Button btnType={"border"} btnText={"FAQ"} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Help;
