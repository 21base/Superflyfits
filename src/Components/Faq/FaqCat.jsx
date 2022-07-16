import styled from "styled-components";
import General from "../../Assets/general.jpg";
import Order from "../../Assets/order.jpg";
import Delivery from "../../Assets/delivery.jpg";
import Payment from "../../Assets/payment.jpg";
import Profile from "../../Assets/profile.jpg";

const Container = styled.div`
  width: 100%;
  padding: 10px 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 113px;
  row-gap: 70px;
`;

const Category = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: ${(props) => props.theme.colors.dark};
  }

  &:nth-child(even) {
    &:before {
      background: ${(props) => props.theme.colors.light_secondary};
    }
  }
`;

const ImageHolder = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 350px;
  height: 250px;
  object-fit: cover;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.white};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.3rem;
`;

const catFaqData = [
  {
    id: 1,
    image: General,
    text: "general",
  },
  {
    id: 2,
    image: Order,
    text: "order",
  },
  {
    id: 3,
    image: Delivery,
    text: "delivery",
  },
  {
    id: 4,
    image: Payment,
    text: "payment",
  },
  {
    id: 5,
    image: Profile,
    text: "profile",
  },
];

const FaqCat = () => {
  return (
    <Container>
      <Wrapper>
        {catFaqData.map(({ id, image, text }) => {
          return (
            <Category key={id}>
              <ImageHolder>
                <Img src={image} />
              </ImageHolder>
              <Text>{text}</Text>
            </Category>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default FaqCat;
