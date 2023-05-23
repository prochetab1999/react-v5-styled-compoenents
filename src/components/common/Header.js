import React, { useState } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;
const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuAlt = styled(Menu)`
  border-top: 5px black;
`;
//override existing styles or add new styles

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};
// using StyledLink with props isActive is not suitable as it produces an error in console. To work around it, we cannot use Link directly, so make it up indirectly.

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: black;
`;
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
