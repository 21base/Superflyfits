import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 40px 45px;
`;

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

const TitleText = styled.h3`
  text-transform: capitalize;
`;

const FilterCat = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify && "right"};
`;

const CatTitle = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  margin-right: 15px;
`;

const Categories = styled.select`
  text-transform: capitalize;
  font-weight: 500;
  background: ${(props) => props.theme.colors.lighter_grey};
  width: 100px;
  width: ${(props) => props.ex && "130px"};
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const CatOptions = styled.option`
  text-transform: capitalize;
`;

const Filter = ({ catFilter, priceFilter }) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TitleText>filter</TitleText>
        </Title>
        <FilterCat>
          <Category>
            <CatTitle>categories:</CatTitle>
            <Categories onChange={(e) => catFilter(e.target.value)}>
              <CatOptions>all</CatOptions>
              <CatOptions>hoodies</CatOptions>
              <CatOptions>sweatshirts</CatOptions>
              <CatOptions>joggers</CatOptions>
              <CatOptions>t-shirts</CatOptions>
              <CatOptions>shorts</CatOptions>
            </Categories>
          </Category>
          <Category justify={true}>
            <CatTitle>price:</CatTitle>
            <Categories ex={true} onChange={(e) => priceFilter(e.target.value)}>
              <CatOptions>ascending</CatOptions>
              <CatOptions>descending</CatOptions>
            </Categories>
          </Category>
        </FilterCat>
      </Wrapper>
    </Container>
  );
};

export default Filter;
