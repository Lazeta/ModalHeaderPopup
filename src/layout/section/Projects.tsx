import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Project } from "../../components/Project";
import { SectionTitle } from "../../components/SectionTitle";
import { Menu } from "../../components/menu/Menu";

const SortItems = ["All", "Landing page", "React", "SPA"];
const projects = [
  {
    title: "Library",
    src: '',
    skill: "",
    text: "",
  },
  {
    title: "Plants",
    src: '',
    skill: "",
    text: "",
  },
  {
    title: "Travel",
    src: '',
    skill: "",
    text: "",
  },
  {
    title: "Audio-player",
    src: '',
    skill: "",
    text: "",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle title="Projects" />
      <StyledSort>
        <Menu menuItems={SortItems} />
      </StyledSort>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        {projects.map((item, index) => (
          <Project
            key={index}
            src={item.src}
            title={item.title}
          />
        ))}
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
`;

const StyledSort = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;