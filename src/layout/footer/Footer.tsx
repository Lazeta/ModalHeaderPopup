import styled from "styled-components";
import { myTheme } from "../../components/MyTheme";
import { Icon } from "../../components/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                iconId={"telegram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                iconId={"linkedinSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                iconId={"githubSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                iconId={"gmailSvg"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>Developed by Stanislav Chekh in 2024</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: 20vh;
  margin-top: 20px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  list-style-type: none;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: inline-flex;
  gap: 50px;
`;

const Copyright = styled.small`
  color: ${myTheme.colors.secondary};
  text-align: center;
`;