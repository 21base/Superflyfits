import styled from "styled-components";
import Button from "../Button";
import { BsArrowLeft } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 0px 45px;
  position: relative;

  svg {
    cursor: pointer;
    font-size: 1.7rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 0;
`;

const IconHolder = styled.div`
  width: 100%;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const ImgHolder = styled.div``;

const Image = styled.img``;

const RightDiv = styled.div`
  width: 50%;
`;

const TextHolder = styled.div`
  width: 400px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Desc = styled.p`
  width: 100%;
`;

const Properties = styled.div`
  width: 100%;
  padding: 10px 0;
`;

const Colors = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ColorsTitle = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  margin-right: 20px;
`;

const ColorsHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Sizes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SizesTitle = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  margin-right: 20px;
`;

const SizesHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SizeHolder = styled.div`
  width: 30px;
  text-align: center;
  border-radius: 4px;
  background: ${(props) => props.sized === "active" && props.theme.colors.dark};
  transition: 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }

  h3 {
    color: ${(props) => props.sized === "active" && props.theme.colors.white};
  }
`;

const Size = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const PriceHolder = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: none;
`;

const ProductSold = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.dark_grey};

  svg {
    font-size: 1rem;
    margin-right: 10px;
    fill: ${(props) => props.theme.colors.danger};
  }
`;

const Actions = styled.div`
  width: 400px;
`;

const CartDetailsContainer = styled.div`
  width: 100%;
  margin: 30px 0 70px 0;
`;

const CartDetails = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin: 0 auto;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.secondary};
`;

const CartDetail = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 500;
`;

const CartView = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
`;

const TheProduct = () => {
  const [size, setSize] = useState("l");

  return (
    <Container>
      <IconHolder>
        <BsArrowLeft />
      </IconHolder>
      <Wrapper>
        <LeftDiv>
          <ImgHolder>
            <Image src={FireSweatshirt} />
          </ImgHolder>
        </LeftDiv>
        <RightDiv>
          <TextHolder>
            <Title>sweatshirt lit as fire</Title>
            <Desc>
              Quisque a mauris molestie urna ornare blandit et vel arcu. In hac
              habitasse platea porttitor in ultricies sed, finibus a mauris
              molest.
            </Desc>
          </TextHolder>
          <Properties>
            <Colors>
              <ColorsTitle>colors:</ColorsTitle>
              <ColorsHolder>
                <Color color={"grey"}></Color>
                <Color color={"black"}></Color>
                <Color color={"orange"}></Color>
              </ColorsHolder>
            </Colors>
            <Sizes>
              <SizesTitle>sizes:</SizesTitle>
              <SizesHolder>
                <SizeHolder
                  onClick={() => setSize("m")}
                  sized={size === "m" && "active"}
                >
                  <Size>m</Size>
                </SizeHolder>
                <SizeHolder
                  onClick={() => setSize("l")}
                  sized={size === "l" && "active"}
                >
                  <Size>l</Size>
                </SizeHolder>
                <SizeHolder
                  onClick={() => setSize("xl")}
                  sized={size === "xl" && "active"}
                >
                  <Size>xl</Size>
                </SizeHolder>
              </SizesHolder>
            </Sizes>
          </Properties>
          <PriceHolder>
            <Price>NGN 2150.5</Price>
            <ProductSold>
              <BsStarFill />
              28 sold
            </ProductSold>
          </PriceHolder>
          <Actions>
            <Button
              btnType={"full"}
              btnText={"add to cart"}
              clicked={"clicked"}
            />
            <Button btnType={"link"} btnText={"go to shop"} ml={"20px"} />
          </Actions>
        </RightDiv>
      </Wrapper>
      <CartDetailsContainer>
        <CartDetails>
          <CartDetail>cart item: 0</CartDetail>
          <CartView>view</CartView>
        </CartDetails>
      </CartDetailsContainer>
    </Container>
  );
};

export default TheProduct;
