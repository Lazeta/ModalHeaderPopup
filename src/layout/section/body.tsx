import styled from "styled-components";
import { HeroSection } from "./HeroSection";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contacts } from "./Contacts";

export const Body = () => {
    return (
        <StyledBody>
            <HeroSection/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
        </StyledBody>
    )
}

const StyledBody = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #3d3c3c;
    z-index: 1;
`