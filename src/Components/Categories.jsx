import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import pullImg1 from "../Assets/pullover-1.jpg";
import pullImg2 from "../Assets/pullover-2.jpg";
import tShirt1 from "../Assets/tshirt-1.jpg";
import tShirt2 from "../Assets/heroImg.jpg";
import sweatShirt1 from "../Assets/sweatshirt-1.jpg";
import sweatShirt2 from "../Assets/sweatshirt-2.jpg";
import JandS from "../Assets/JandS.png";

const CategoriesData = [
  {
    id: 1,
    title: "collections on pullovers",
    para: "Request or make an order for adults and couples pullovers",
    pos: "left",
    fImg: pullImg1,
    sImg: pullImg2,
  },
  {
    id: 2,
    title: "collections on t-shirts",
    para: "Request or make an order for adults and couples t-shirts",
    pos: "right",
    fImg: tShirt1,
    sImg: tShirt2,
  },
  {
    id: 3,
    title: "collections on sweat shirts",
    para: "Request or make an order for adults and couples sweatshirts",
    pos: "left",
    fImg: sweatShirt1,
    sImg: sweatShirt2,
  },
];

const Container = styled.div`
  width: 100vw;
  position: relative;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const LeftDiv = styled.div`
  width: 50%;
  padding: 100px 0;
`;

const DivHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.pos === "right" && "right"}; ;
`;

const ShadowDiv = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) =>
    props.pos === "left"
      ? props.theme.colors.primary
      : props.theme.colors.lighter_secondary};
  position: absolute;
  right: ${(props) => props.pos === "right" && "0"};
  z-index: -1;
`;

const MainDiv = styled.div`
  width: 400px;
  height: 300px;
  background: ${(props) =>
    props.pos === "left"
      ? props.theme.colors.lighter_secondary
      : props.theme.colors.primary};
  margin-left: ${(props) => props.pos === "left" && "5%"};
  margin-right: ${(props) => props.pos === "right" && "5%"};
`;

const TextHolder = styled.div`
  position: absolute;
  width: 350px;
  left: ${(props) => props.pos === "left" && "30%"};
  right: ${(props) => props.pos === "right" && "30%"};
  text-align: ${(props) => props.pos === "right" && "right"};
`;

const Tittle = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 1.2;
  color: ${(props) => props.pos === "right" && props.theme.colors.secondary};
  width: ${(props) => props.lastCat === "JandS" && "350px"};
  margin-bottom: ${(props) => props.lastCat === "JandS" && "20px"};
`;

const Paragraph = styled.p`
  width: ${(props) => props.lastCat === "JandS" && "450px"};
`;

const LinkHolder = styled.div`
  margin-left: ${(props) => props.pos === "left" && "30%"};
  margin-right: ${(props) => props.pos === "right" && "30%"};
  padding: 20px 0;
  width: 90px;
  float: ${(props) => props.pos === "right" && "right"};
`;

const ALink = styled.a`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
  line-height: 1;
  display: flex;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.colors.primary};
    margin-left: 10px;
  }
`;

const RightDiv = styled.div`
  width: 50%;
`;

const ImageHolder = styled.div`
  position: relative;
`;

const FirstImg = styled.img`
  max-width: 40%;
  margin-top: 50px;
  max-width: ${(props) => props.lastCat === "JandS" && "80%"};
`;

const SecondImg = styled.img`
  position: absolute;
  max-width: 40%;
  right: 0;
`;

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map(({ id, title, para, pos, fImg, sImg }) => {
        return (
          <Wrapper key={id}>
            <LeftDiv>
              <DivHolder pos={pos}>
                <ShadowDiv pos={pos}></ShadowDiv>
                <MainDiv pos={pos}></MainDiv>
                <TextHolder pos={pos}>
                  <Tittle pos={pos}>{title}</Tittle>
                  <Paragraph>{para}</Paragraph>
                </TextHolder>
              </DivHolder>
              <LinkHolder pos={pos}>
                <ALink href="#">
                  see all <BsArrowRight />
                </ALink>
              </LinkHolder>
            </LeftDiv>
            <RightDiv>
              <ImageHolder>
                <FirstImg src={fImg} />
                <SecondImg src={sImg} />
              </ImageHolder>
            </RightDiv>
          </Wrapper>
        );
      })}
      <Wrapper>
        <LeftDiv>
          <Tittle lastCat={"JandS"}>joggers {"&"} shorts</Tittle>
          <Paragraph lastCat={"JandS"}>
            Joggers, shorts, joggers(top only), joggers(pants only), couple
            wears and all women and men shorts for comfortability are available
            in store. Place request or orders now.
          </Paragraph>
          <LinkHolder>
            <ALink href="#">
              see all <BsArrowRight />
            </ALink>
          </LinkHolder>
        </LeftDiv>
        <RightDiv>
          <FirstImg lastCat={"JandS"} src={JandS} />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Categories;
