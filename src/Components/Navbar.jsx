import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Nav = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 45px;
`;

const Menu = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
`;

const Brand = styled.div``;

const BrandName = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
`;

const SCP = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcons = styled.div`
  font-size: 1.3rem;
  position: relative;
  transition: 0.3s ease;

  &:not(:last-child) {
    margin-right: 50px;
  }

  color: ${(props) => props.theme.colors.dark};
  display: ${(props) => props.flexSearch && "flex"};
  align-items: ${(props) => props.flexSearch && "center"};
  border: ${(props) =>
    props.searchActive && `1px solid ${props.theme.colors.light_grey}`};
  border-radius: ${(props) => props.searchActive && "4px"};
  padding: ${(props) => props.searchActive && "10px 15px"};
`;

const Search = styled.input`
  width: 100%;
`;

const Badge = styled.div`
  width: 15px;
  height: 15px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  right: -10px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.5em;
`;

const Navbar = () => {
  const [searchState, setSearchState] = useState(false);
  const [showDropdown, setShowDropdown] = useState(0)

  const handleClick = (para) => {
    setShowDropdown(para)
  }

  console.log(showDropdown);
  
  return (
    <>
      <Dropdown handleClick={handleClick} showDropdownState={showDropdown} />
      <Nav>
        <Menu>
          <GiHamburgerMenu onClick={()=> setShowDropdown(1)} />
        </Menu>
        <Brand>
          <BrandName>superflyfits</BrandName>
        </Brand>
        <SCP>
          <NavIcons searchActive={searchState} flexSearch={true}>
            {searchState && <Search placeholder="Pullovers" />}
            <BsSearch
              style={{ cursor: "pointer" }}
              onClick={() => setSearchState(!searchState)}
            />
          </NavIcons>
          <NavIcons style={{ cursor: "pointer" }}>
            <Badge>1</Badge>
            <BsCart2 />
          </NavIcons>
          <NavIcons style={{ cursor: "pointer" }}>
            <FaUserCircle />
          </NavIcons>
        </SCP>
      </Nav>
    </>
  );
};

export default Navbar;
