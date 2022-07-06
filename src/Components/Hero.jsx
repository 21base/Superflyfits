import styled from "styled-components";
import HeroImage from "../Assets/heroImg.jpg";
import ProductImage from "../Assets/hotelTshirt.jpg";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  min-height: 500px;
`;

const Texts = styled.div`
  z-index: 2;
`;

const HeroText = styled.h1`
  font-size: 5rem;
`;

const HeroColorText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const HeroSubText = styled.p`
  font-family: "dancing script";
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  margin-top: -30px;
  font-weight: 500;
`;

const HeroImg = styled.img`
  position: absolute;
  max-width: 40%;
  right: 20%;
`;

const RightDiv = styled.div`
  width: 50%;
  position: relative;
`;

const ProductContainer = styled.div`
  margin-top: 100px;
`;

const ProductImgHolder = styled.div`
  width: 250px;
`;

const ProductImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const ProductTextHolder = styled.div`
  margin-bottom: 15px;
`;

const ProductName = styled.h3`
  text-transform: capitalize;
  margin: 5px 0;
`;

const ProductDesc = styled.p`
  width: 350px;
  font-size: 1rem;
  line-height: 1.7;
`;

const RoundButtonsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const RoundButtonsLayer = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const RoundButton = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <LeftDiv>
        <Texts>
          <HeroText>
            Cre<HeroColorText>8</HeroColorText>tive
          </HeroText>
          <HeroSubText>Fashion sale</HeroSubText>
        </Texts>
        <HeroImg src={HeroImage} />
      </LeftDiv>
      <RightDiv>
        <ProductContainer>
          <ProductImgHolder>
            <ProductImg src={ProductImage} />
          </ProductImgHolder>
          <ProductTextHolder>
            <ProductName>hotel t-shirt</ProductName>
            <ProductDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              laboriosam, Dolores nobis sunt rem porro officia esse et illo.
            </ProductDesc>
          </ProductTextHolder>
          <Button btnType={"full"} btnText={"shop now"} />
        </ProductContainer>
        <RoundButtonsContainer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
          <RoundButtonsLayer>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
            <RoundButton></RoundButton>
          </RoundButtonsLayer>
        </RoundButtonsContainer>
      </RightDiv>
    </Container>
  );
};

export default Hero;
