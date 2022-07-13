import styled from "styled-components";
import SuaveHoodie from "../../Assets/suaveHoodie.png";
import RealShort from "../../Assets/realShort.png";
import StripeHoodie from "../../Assets/stripeHoodie.png";
import WorkoutTshirt from "../../Assets/workoutTshirt.png";
import FitnessTshirt from "../../Assets/fitnessTshirt.png";
import StripeJoggers from "../../Assets/stripeJoggers.png";
import TurtleNeck from "../../Assets/fitTurtleNeck.png";
import FireSweatshirt from "../../Assets/fireSweatshirt.png";
import { BsStarFill } from "react-icons/bs";
import Filter from "./Filter";
import { useEffect, useState } from "react";
// import { AiFillHeart } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 90px;
  row-gap: 80px;
`;

const ProductContainer = styled.div`
  background: ${(props) => props.theme.colors.mid_white};
  width: 250px;
  height: 325px;
  overflow: hidden;
  border-radius: 12px;
`;

const ProductImgHolder = styled.div`
  width: 100%;
  height: 220px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
`;

const ProductNameHolder = styled.div`
  width: 100%;
  padding: 10px 0 0 15px;
`;

const ProductName = styled.p`
  text-transform: capitalize;
  font-weight: 400;
`;

const ProductPriceHolder = styled.div`
  width: 100%;
  padding: 0 0 0 15px;
`;

const ProductPrice = styled.h2`
  font-size: 1.3rem;
`;

const ProductSoldNSave = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  align-items: center;
`;

const ProductSold = styled.p`
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.dark_grey};
  font-weight: 300;

  svg {
    fill: ${(props) => props.theme.colors.danger};
    margin-right: 10px;
  }
`;

const ProductSave = styled.div`
  width: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: right;

  svg {
    cursor: pointer;
  }
`;

const tempData = [
  {
    id: 2100001,
    name: "suave hoodie",
    price: 5680.2,
    sold: 21,
    img: SuaveHoodie,
    cat: "hoodies",
  },
  {
    id: 2100002,
    name: "dope outfit short",
    price: 3260.4,
    sold: 32,
    img: RealShort,
    cat: "shorts",
  },
  {
    id: 2100003,
    name: "stripe hoodie",
    price: 5980.2,
    sold: 40,
    img: StripeHoodie,
    cat: "hoodies",
  },
  {
    id: 2100004,
    name: "workout t-shirt",
    price: 2350.55,
    sold: 12,
    img: WorkoutTshirt,
    cat: "t-shirts",
  },
  {
    id: 2100005,
    name: "stripe jogger",
    price: 3350.95,
    sold: 53,
    img: StripeJoggers,
    cat: "joggers",
  },
  {
    id: 2100006,
    name: "fitness t-shirt",
    price: 2150.5,
    sold: 33,
    img: FitnessTshirt,
    cat: "t-shirts",
  },
  {
    id: 2100007,
    name: "slim fit turtle neck",
    price: 3230.25,
    sold: 28,
    img: TurtleNeck,
    cat: "sweatshirts",
  },
  {
    id: 2100008,
    name: "sweatshirt lit as fire",
    price: 3375.25,
    sold: 37,
    img: FireSweatshirt,
    cat: "sweatshirts",
  },
];

const Shop = () => {
  const [productFilter, setProductFilter] = useState(tempData);
  const [CatFilter, setCatFilter] = useState("all");
  const [PriceFilter, setPriceFilter] = useState("ascending");

  const nameFilter = (catName) => {
    setCatFilter(catName);
  };

  const priceFilter = (priceName) => {
    setPriceFilter(priceName);
  };

  const FilteredPrice = () => {
    if (PriceFilter === "descending") {
      productFilter.sort((a, b) => b.price - a.price);
    } else {
      productFilter.sort((a, b) => a.price - b.price);
    }
  };
  FilteredPrice();

  useEffect(() => {
    if (CatFilter === "all") {
      setProductFilter(tempData);
    } else {
      const filteredProduct = tempData.filter(
        (items) => items.cat === CatFilter
      );
      setProductFilter(filteredProduct);
    }
  }, [CatFilter, PriceFilter]);

  return (
    <>
      <Filter catFilter={nameFilter} priceFilter={priceFilter} />
      <Container>
        <Wrapper>
          {productFilter.map(({ id, name, price, sold, img }) => {
            return (
              <ProductContainer key={id}>
                <ProductImgHolder>
                  <ProductImg src={img} />
                </ProductImgHolder>
                <ProductNameHolder>
                  <ProductName>{name}</ProductName>
                </ProductNameHolder>
                <ProductPriceHolder>
                  <ProductPrice>NGN {price}</ProductPrice>
                </ProductPriceHolder>
                <ProductSoldNSave>
                  <ProductSold>
                    <BsStarFill />
                    {sold} sold
                  </ProductSold>
                  <ProductSave>{/* <AiFillHeart /> */}</ProductSave>
                </ProductSoldNSave>
              </ProductContainer>
            );
          })}
        </Wrapper>
      </Container>
    </>
  );
};

export default Shop;
