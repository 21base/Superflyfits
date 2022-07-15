import styled from "styled-components";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import SuaveHoodie from "../../Assets/suaveHoodie.png";

const Container = styled.div`
  width: 100%;
  padding: 10px 45px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
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

const tempData = [
  {
    id: 2100008,
    name: "sweatshirt lit as fire",
    price: 3375.25,
    sold: 37,
    img: FireSweatshirt,
    cat: "sweatshirts",
    color: "grey",
    size: "l",
  },
  {
    id: 2100001,
    name: "suave hoodie",
    price: 5680.2,
    sold: 21,
    img: SuaveHoodie,
    cat: "hoodies",
    color: "orange",
    size: "l",
  },
];

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        {tempData.map(({ id, name, price, color, size, img }) => {
          return (
            <CartContainer key={id}>
              <CartImgHolder>
                <CartImg src={img} />
              </CartImgHolder>
              <CartProperties>
                <CartDetail>
                  <CartDetailText>product: </CartDetailText>
                  {name}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>id: </CartDetailText>
                  {id}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>color: </CartDetailText>
                  <CartDetailColor color={color}></CartDetailColor>
                  {color}
                </CartDetail>
                <CartDetail>
                  <CartDetailText>Size: </CartDetailText>
                  {size}
                </CartDetail>
              </CartProperties>
              <ProductQtyPrice>
                <ProductQty>
                  <ProductQtyBtn>{"-"}</ProductQtyBtn>
                  <ProductQtyText>1</ProductQtyText>
                  <ProductQtyBtn>{"+"}</ProductQtyBtn>
                </ProductQty>
                <ProductPrice>
                  <ProductPriceText>NGN {price}</ProductPriceText>
                </ProductPrice>
              </ProductQtyPrice>
              <RemoveProduct>
                <RemoveProductBtn>Remove</RemoveProductBtn>
              </RemoveProduct>
            </CartContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
