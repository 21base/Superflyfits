import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 45px;
`;

const Wrapper = styled.div`
  width: 200px;
`;

const Brief = styled.div`
  margin-bottom: 20px;
`;

const BriefText = styled.p`
  color: ${(props) => props.theme.colors.dark_grey};
`;

const Desc = styled.div`
    margin-bottom: 20px;
`;

const DescText = styled.h2`
  font-size: 1.1rem;
`;

const Explain = () => {
  return (
    <Container>
      <Wrapper>
        <Brief>
          <BriefText>Maybe we've already answered your question</BriefText>
        </Brief>
        <Desc>
          <DescText>Find by category</DescText>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Explain;
