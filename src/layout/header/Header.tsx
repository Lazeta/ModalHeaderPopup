import React, { useState } from "react";
import styled from "styled-components";

type menuProps = {
    isMenuOpen: boolean;
};

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledHeaderBody>
            <StyledHeader>
                <Menu isMenuOpen={isMenuOpen}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </Menu>
                <Burger onClick={toggleMenu}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Burger>
            </StyledHeader>
        </StyledHeaderBody>
    );
};

const StyledHeaderBody = styled.div`
  background-color: #3d3c3c;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

const StyledHeader = styled.header`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  height: 100%;
  padding: 20px;

`;

const Menu = styled.nav<menuProps>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  align-items: center;
  margin: 0 auto;
  z-index: 99;
  ul {
    list-style-type: none;

    li {
      color: #f0e2e2;
      font-size: 2rem;
      padding: 20px;
    }
  }
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 100;
`;

const Line = styled.div`
    width: 30px;
    height: 3px;
    background-color: #eeffee;
    margin-bottom: 6px;
`