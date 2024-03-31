import styled from 'styled-components'
import { myTheme } from './MyTheme'

type SectionTitlePropsType = {
  title: string
}

export const SectionTitle = ({title}: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      {title}
    </StyledSectionTitle>
  )
}

export const StyledSectionTitle = styled.h2`
  color: ${myTheme.colors.secondary};
  letter-spacing: 2px;
  font-size: 1.3rem;
  text-align: center;
`