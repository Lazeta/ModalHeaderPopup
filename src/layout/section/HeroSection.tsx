import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { myTheme } from "../../components/MyTheme";
import { Button } from "../../components/Button";


export const HeroSection = () => {
    return (
      <StyledHeroSection>
        <FlexWrapper justify="space-between" gapItem="50px">
          <div>
            <StyledTitle>Frontend Developer</StyledTitle>
            <h2>Chekh Stas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              obcaecati earum tempore non officiis nisi incidunt sapiente
              temporibus ipsa? Sint quas facilis eum sequi laborum ad nobis nulla
              vitae perspiciatis!
            </p>
            <Button title={"Contact Me"} width={"150px"} font={"1.2rem"} />
          </div>
          <Logo>
            <img alt="#" />
          </Logo>
        </FlexWrapper>
      </StyledHeroSection>
    );
  };
  
  const StyledHeroSection = styled.section`
    width: auto;
    min-height: 250px;
    > * > * p,
    .Button {
      padding: 0 0px 20px 0;
    }
  
    > * > * h2 {
      color: ${myTheme.colors.any};
      font-size: 4rem;
      margin: 0;
    }
    > * > * p {
      color: ${myTheme.colors.secondary};
    }
  `;
  
  const StyledTitle = styled.h1`
    color: ${myTheme.colors.secondary};
  `;
  
  const Logo = styled.div`
    width: 50%;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 5px 5px 10px 2px;
    }
  `