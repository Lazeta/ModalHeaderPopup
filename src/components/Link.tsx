import styled from "styled-components";
import { myTheme } from "./MyTheme";


type LinkPropsType = {
  href: string;
  title: string;
};

export const Link: React.FC<LinkPropsType> = ({ href, title }) => {
  return (
    <>
      <StyledLink href={href}>
        {title}
      </StyledLink>
    </>
  );
};

const StyledLink = styled.a`
  background-color: ${myTheme.colors.primary};
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${myTheme.colors.secondary};
`;