import React, { useState } from "react";
import styled from "styled-components";

type menuProps = {
  isOpen: boolean;
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeaderBody>
      <StyledHeader>
        <Menu isOpen={isMenuOpen}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Menu>

        <MenuDesc isOpen={isMenuOpen}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </MenuDesc>

        <Burger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
          <Line></Line>
        </Burger>
      </StyledHeader>
    </StyledHeaderBody>
  );
};

const StyledHeaderBody = styled.div`
  background-color: #3d3c3c;
  width: 100%;
  min-height: 9vh;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Menu = styled.nav<menuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "flex")};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 99;
  background-color: #169070;
  max-width: 600px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: opacity 0.3s ease, transform 0.3s ease;

  ul {
    list-style-type: none;

    li {
      color: #f0e2e2;
      font-size: 2rem;
      padding: 20px;
      cursor: pointer;
    }
  }
`;

const MenuDesc = styled.nav<menuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 1;
  background-color: #8da818;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "0px" : "100px")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transition: all 0.3s ease-in-out, height 0.3s ease;

  ul {
    list-style-type: none;
    display: flex;

    li {
      color: #f0e2e2;
      font-size: 1.5rem;
      padding: 20px;
      cursor: pointer;
    }
  }
`;

const Burger = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "rotate(90deg)" : "rotate(0)"
  };

  &:before,
  &:after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: #eeffee;
    margin-bottom: 6px;
    transition: transform 0.3s ease;
  }

  &:before {
    transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "rotate(-90deg) translate(-6px, 0)" : "rotate(0) translate(0, -6px)"};
  }

  &:after {
    transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "rotate(90deg) translate(-6px, 0)" : "rotate(0) translate(0, 6px)"};
  }
`;

const Line = styled.div`
    width: 30px;
    height: 3px;
    background-color: #eeffee;
    margin-bottom: 6px;
`