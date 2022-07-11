import styled from "styled-components";
import Collage from "../../Assets/collage.png"

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const TextHolder = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 10px;
`;

const Para = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const RightDiv = styled.div`
  width: 50%;
`;

const Img = styled.img`
  max-width: 80%;
`;

const HeroSec = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <TextHolder>
            <Title> superfly wears</Title>
            <Para>
              Each items in the store has at least one different color from the
              one shown. Just click the product that interest you and select a
              color you'll like to order then add to cart and checkout. Go
              Shopping.
            </Para>
          </TextHolder>
        </LeftDiv>
        <RightDiv>
            <Img src={Collage} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default HeroSec;
