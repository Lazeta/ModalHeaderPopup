import styled from "styled-components";
import { Button } from "./Button";
import { FlexWrapper } from "./FlexWrapper";
import { myTheme } from "./MyTheme";
import { SectionTitle } from "./SectionTitle";
import { Link } from "./Link";


type ProjectPropsType = {
    src: string;
    title: string;
    skill?: string;
    text?: string;
};

const links = [
    { href: "/demo", title: "demo" },
    { href: "/github.io", title: "code" },
];

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <StyledImage src={props.src} alt="bad way" />
            <StyledProjectDescription>
                <FlexWrapper
                    justify="space-between"
                    wrap="wrap"
                    align="center"
                    gapItem="40px"
                >
                    <SectionTitle title={"Projects"}></SectionTitle>
                    <ul>
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} title={link.title} />
                        ))}
                    </ul>
                </FlexWrapper>
                <UseTechnologys>
                    <ButtonUseTechnologys>
                        <Button title="JAVASCRIPT" />
                    </ButtonUseTechnologys>
                    <ButtonUseTechnologys>
                        <Button title="REACT" />
                    </ButtonUseTechnologys>
                    <ButtonUseTechnologys>
                        <Button title="WEBPACK" />
                    </ButtonUseTechnologys>
                    <ButtonUseTechnologys>
                        <Button title="TYPESCRIPT" />
                    </ButtonUseTechnologys>
                </UseTechnologys>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
                    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
                    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
                    velit, officia perspiciatis.
                </p>
            </StyledProjectDescription>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 100%;
  width: 48%;
  background-color: ${myTheme.colors.lightFont};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UseTechnologys = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-right: 40px;
`;

const ButtonUseTechnologys = styled.div`
  
`;

const StyledProjectDescription = styled.div`
  display: flex;
  gap: 0px;
  padding: 0 15px;
  flex-wrap: wrap;
  span {
    color: ${myTheme.colors.secondary};
  }
  p {
    color: ${myTheme.colors.secondary};
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;