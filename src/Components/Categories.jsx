import styled from "styled-components";
import {BsArrowRight} from "react-icons/bs"
import FirstImage from "../Assets/pullover-1.jpg"
import SecondImage from "../Assets/pullover-2.jpg"

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  padding: 40px 45px;
  display: flex;
  align-items: center;
`;

const LeftDiv = styled.div`
  width: 50%;
  padding: 100px 0;
`;

const SubContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ShadowDiv = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) => props.theme.colors.primary};
  position: absolute;
  z-index: -1;
`;

const MainDiv = styled.div`
  width: 400px;
  height: 300px;
  background: ${(props) => props.theme.colors.lighter_secondary};
  margin-left: 5%;
`;

const TextHolder = styled.div`
  position: absolute;
  width: 350px;
  left: 30%;
`;

const Tittle = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 1.2;
`;

const Paragraph = styled.p``;

const LinkHolder = styled.div`
  margin-left: 30%;
  padding: 20px 0;
  width: 100px;
`;

const ALink = styled.a`
    text-transform: capitalize;
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
    line-height: 1;
    display: flex;
    align-items: center;

    svg {
        fill: ${props => props.theme.colors.primary};
        margin-left: 10px;
    }
`

const RightDiv = styled.div`
  width: 50%;
`;

const ImageHolder = styled.div`
    position: relative;
`

const FirstImg = styled.img`
    max-width: 40%;
    margin-top: 50px;
`

const SecondImg = styled.img`
    position: absolute;
    max-width: 40%;
    right: 0;
`

const Categories = () => {
  return (
    <Wrapper>
      <LeftDiv>
        <SubContainer>
          <ShadowDiv></ShadowDiv>
          <MainDiv></MainDiv>
          <TextHolder>
            <Tittle>collections on pullovers</Tittle>
            <Paragraph>
              Request or make an order for adults and couples pullovers
            </Paragraph>
          </TextHolder>
        </SubContainer>
        <LinkHolder>
          <ALink href="#">see all <BsArrowRight /></ALink>
        </LinkHolder>
      </LeftDiv>
      <RightDiv>
        <ImageHolder>
            <FirstImg src={FirstImage} />
            <SecondImg src={SecondImage} />
        </ImageHolder>
      </RightDiv>
    </Wrapper>
  );
};

export default Categories;
