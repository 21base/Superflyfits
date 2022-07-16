import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleHolder = styled.div``;

const Title = styled.h2`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
`;

const SearchHolder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.lighter_secondary}
`;

const SearchBtn = styled.button`
  text-transform: capitalize;
  position: absolute;
  right: 20px;
  background: transparent;
  color: ${props => [props.theme.colors.light_secondary]};
  font-weight: 500;
  cursor: pointer;
`;

const Heading = () => {
  return (
    <Container>
      <Wrapper>
        <TitleHolder>
          <Title>faq</Title>
        </TitleHolder>
        <SearchHolder>
          <SearchInput placeholder="How can i make an order?" />
          <SearchBtn>search</SearchBtn>
        </SearchHolder>
      </Wrapper>
    </Container>
  );
};

export default Heading;
