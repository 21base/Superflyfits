import styled from "styled-components";

const ButtonDesign = styled.button`
  width: 150px;
  border-radius: 4px;
  padding: 15px 0;
  text-transform: capitalize;
  background: transparent;
  font-size: 0.9rem;
  background: ${(props) =>
    props.btnType === "full" && props.theme.colors.secondary};
  border: ${(props) =>
    props.btnType === "border" && `1px solid ${props.theme.colors.secondary}`};
  color: ${(props) => props.btnType === "full" && props.theme.colors.white};
  color: ${(props) =>
    props.btnType === "border" && props.theme.colors.secondary};
  color: ${(props) => props.btnType === "link" && props.theme.colors.secondary};
  text-decoration: ${(props) => props.btnType === "link" && "underline"};
  margin-left: ${(props) => props.ml};
`;

const Button = ({ btnType, btnText, ml }) => {
  return (
    <ButtonDesign style={{ cursor: "pointer" }} btnType={btnType} ml={ml}>
      {btnText}
    </ButtonDesign>
  );
};

export default Button;
