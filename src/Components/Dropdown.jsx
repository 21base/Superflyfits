import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.lighter_secondary};
  position: absolute;
  z-index: 99;
  padding: 40px 45px;
  transform: translateY(-110%);
  transform: translateY(
    ${(props) => (props.dropdownStatus === 1 ? "0" : "-110%")}
  );
  transition: 0.5s ease-out;
`;

const Close = styled.div`
  width: 100%;
  font-size: 1.7rem;
  text-align: right;
`;

const NavLinks = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const NavLink = styled.a`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.activeLink === "changed" && "600"};
  cursor: pointer;
  transition: 0.3s ease;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 120px;
  padding: 10px 0;
  margin: 0 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  background: transparent;
  cursor: pointer;
  background: ${(props) =>
    props.btnStyle === "full" && props.theme.colors.dark};
  color: ${(props) => props.btnStyle === "full" && props.theme.colors.white};
  border: ${(props) =>
    props.btnStyle === "border" && `1px solid ${props.theme.colors.dark}`};
  font-weight: 500;
`;

const Dropdown = ({ handleClick, showDropdownState }) => {
  const [page, setPage] = useState("Home");

  return (
    <Wrapper dropdownStatus={showDropdownState}>
      <Close>
        <GrClose onClick={() => handleClick(0)} style={{ cursor: "pointer" }} />
      </Close>
      <NavLinks>
        <NavLink
          onClick={() => setPage("Home")}
          activeLink={page === "Home" && "changed"}
        >
          home
        </NavLink>
        <NavLink
          onClick={() => setPage("Product")}
          activeLink={page === "Product" && "changed"}
        >
          products
        </NavLink>
        <NavLink
          onClick={() => setPage("About")}
          activeLink={page === "About" && "changed"}
        >
          about
        </NavLink>
        <NavLink
          onClick={() => setPage("Faq")}
          activeLink={page === "Faq" && "changed"}
        >
          faq
        </NavLink>
        <Buttons>
          <Button btnStyle={"full"}>Sign In</Button>
          <Button btnStyle={"border"}>Sign Up</Button>
        </Buttons>
      </NavLinks>
    </Wrapper>
  );
};

export default Dropdown;
