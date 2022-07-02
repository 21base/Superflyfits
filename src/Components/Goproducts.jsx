import styled from "styled-components";
import Button from "./Button";
import foldedTshirt from "../Assets/foldedTshirt.jpg";
import Short from "../Assets/short.jpg";
import hotelTshirt from "../Assets/hotelTshirt2.jpg";
import superflyfits from "../Assets/superflyfits.png";

const Container = styled.div`
  width: 100vw;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ImageHolder = styled.div``;

const Image = styled.img`
  width: 190px;
`;

const BriefTalk = styled.p`
  width: 550px;
  margin-bottom: 30px;
`;

const RightDiv = styled.div`
  width: 50%;
  text-align: center;
`;

const Superflyfits = styled.img`
  max-width: 70%;
`;

const Goproducts = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <ImageContainer>
            <ImageHolder>
              <Image src={foldedTshirt} />
            </ImageHolder>
            <ImageHolder>
              <Image src={Short} />
            </ImageHolder>
            <ImageHolder>
              <Image src={hotelTshirt} />
            </ImageHolder>
          </ImageContainer>
          <BriefTalk>
            Superflyfits is a brand with a store of various products and items
            like pullovers, shorts, sweatshirts, joggers with the brand name on
            it. All wears is available for couples (identical pants). They are
            lot more available in store that are not mentioned here here dig in
            now and find out what awesome product your money can get and trust
            me you it can get you more than you imagined
          </BriefTalk>
          <Button btnText={"about"} btnType={"border"} />
          <Button ml={"30px"} btnText={"go to products"} btnType={"full"} />
        </LeftDiv>
        <RightDiv>
          <Superflyfits src={superflyfits} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Goproducts;
