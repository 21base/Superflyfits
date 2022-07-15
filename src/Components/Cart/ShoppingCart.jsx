import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import SuaveHoodie from "../../Assets/suaveHoodie.png";

const Container = styled.div`
  width: 100%;
  padding: 10px 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  margin-bottom: 20px;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartIconHolder = styled.div`
  cursor: pointer;

  svg {
    font-size: 1.7rem;
  }
`;

const CartTitleHolder = styled.div``;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const CartRemoveAllHolder = styled.div``;

const CartRemoveAllBtn = styled.button`
  background: transparent;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.colors.danger};
`;

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`;

const CartImgHolder = styled.div``;

const CartImg = styled.img`
  max-width: 70%;
`;

const CartProperties = styled.div``;

const CartDetail = styled.div`
  text-transform: capitalize;
  display: flex;
  align-content: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const CartDetailText = styled.p`
  font-weight: 600;
  margin-right: 15px;
`;

const CartDetailColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-right: 10px;
`;

const ProductQtyPrice = styled.div``;

const ProductQty = styled.div`
  display: flex;
  align-items: center;
`;

const ProductQtyText = styled.p`
  width: 60px;
  text-align: center;
  font-weight: 600;
  font-size: 1.3rem;
`;

const ProductQtyBtn = styled.button`
  width: 50px;
  height: 35px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
`;

const ProductPrice = styled.div`
  margin-top: 20px;
`;

const ProductPriceText = styled.h3`
  text-align: center;
`;

const RemoveProduct = styled.div``;

const RemoveProductBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.danger};
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
`;

const Checkout = styled.div`
  width: 280px;
  height: 60px;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 9;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPrice = styled.div``;

const TotalPriceText = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.lighter_secondary};
  font-weight: 600;
  font-size: 1.1rem;
`;

const CheckoutBtnHolder = styled.div``;

const CheckoutBtn = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1rem;
`;

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        <CartHeader>
          <CartIconHolder>
            <BsArrowLeft />
          </CartIconHolder>
          <CartTitleHolder>
            <CartTitle>shopping cart</CartTitle>
          </CartTitleHolder>
          <CartRemoveAllHolder>
            <CartRemoveAllBtn>Remove all</CartRemoveAllBtn>
          </CartRemoveAllHolder>
        </CartHeader>
        <CartContainer>
          <CartImgHolder>
            <CartImg src={FireSweatshirt} />
          </CartImgHolder>
          <CartProperties>
            <CartDetail>
              <CartDetailText>product: </CartDetailText>
              sweatshirt lit as fire
            </CartDetail>
            <CartDetail>
              <CartDetailText>id: </CartDetailText>
              2100008
            </CartDetail>
            <CartDetail>
              <CartDetailText>color: </CartDetailText>
              <CartDetailColor color={"grey"}></CartDetailColor>
              grey
            </CartDetail>
            <CartDetail>
              <CartDetailText>Size: </CartDetailText>l
            </CartDetail>
          </CartProperties>
          <ProductQtyPrice>
            <ProductQty>
              <ProductQtyBtn>{"-"}</ProductQtyBtn>
              <ProductQtyText>1</ProductQtyText>
              <ProductQtyBtn>{"+"}</ProductQtyBtn>
            </ProductQty>
            <ProductPrice>
              <ProductPriceText>NGN 3375.25</ProductPriceText>
            </ProductPrice>
          </ProductQtyPrice>
          <RemoveProduct>
            <RemoveProductBtn>Remove</RemoveProductBtn>
          </RemoveProduct>
        </CartContainer>
        <CartContainer>
          <CartImgHolder>
            <CartImg src={SuaveHoodie} />
          </CartImgHolder>
          <CartProperties>
            <CartDetail>
              <CartDetailText>product: </CartDetailText>
              suave hoodie
            </CartDetail>
            <CartDetail>
              <CartDetailText>id: </CartDetailText>
              2100001
            </CartDetail>
            <CartDetail>
              <CartDetailText>color: </CartDetailText>
              <CartDetailColor color={"orange"}></CartDetailColor>
              orange
            </CartDetail>
            <CartDetail>
              <CartDetailText>Size: </CartDetailText>l
            </CartDetail>
          </CartProperties>
          <ProductQtyPrice>
            <ProductQty>
              <ProductQtyBtn>{"-"}</ProductQtyBtn>
              <ProductQtyText>1</ProductQtyText>
              <ProductQtyBtn>{"+"}</ProductQtyBtn>
            </ProductQty>
            <ProductPrice>
              <ProductPriceText>NGN 5680.20</ProductPriceText>
            </ProductPrice>
          </ProductQtyPrice>
          <RemoveProduct>
            <RemoveProductBtn>Remove</RemoveProductBtn>
          </RemoveProduct>
        </CartContainer>
        <Checkout>
          <TotalPrice>
            <TotalPriceText>NGN 9380.20</TotalPriceText>
          </TotalPrice>
          <CheckoutBtnHolder>
            <CheckoutBtn>checkout</CheckoutBtn>
          </CheckoutBtnHolder>
        </Checkout>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
