import styled from "styled-components";
import { myTheme } from "./MyTheme";

type ButtonPropsType = {
  title: string
  width?: string
  font?: string
};


export const Button = (props: ButtonPropsType) => {
    const { title} = props; // Извлекаем title из props
    return (
    <>
      <StyledButton width={props.width} font={props.font}>
        {title}
      </StyledButton>
    </>
  );
};


type StyledButtonPropsType = {
  height?: string;
  width?: string | undefined;
  font?: string;
  color?: string;
};

const StyledButton = styled.button<StyledButtonPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.lightFont}`};
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  background: ${myTheme.colors.primary};
  cursor: pointer;
  &:hover {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }
  @keyframes pulse512 {
  0% {
   box-shadow: 0 0 0 0 #00d9ff66;
  }
 
  70% {
   box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
  }
 
  100% {
   box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
  }
 }
`;