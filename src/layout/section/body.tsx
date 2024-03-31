import styled from "styled-components";

export const Body = () => {
    return (
        <StyledBody>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </StyledBody>
    )
}

const StyledBody = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #1a3e5d;
    z-index: 1;
`