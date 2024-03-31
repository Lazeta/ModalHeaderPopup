import styled from "styled-components";
import { myTheme } from "../../components/MyTheme";
import { SectionTitle } from "../../components/SectionTitle";


export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle title="About me"/>
      <StyledVerticalLine>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          maiores consequuntur dolore quos in. Doloribus blanditiis aspernatur
          dignissimos provident, vitae dicta placeat sint nemo repudiandae ex,
          mollitia quaerat aperiam temporibus.
        </p>
      </StyledVerticalLine>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  max-width: 700px;
  width: 100%;
`;

const StyledVerticalLine = styled.div`
  p {
    color: ${myTheme.colors.secondary}
  }
`