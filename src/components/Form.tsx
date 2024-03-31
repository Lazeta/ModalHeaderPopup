import styled from "styled-components";
import { Button } from "./Button";
import { myTheme } from "./MyTheme";

type FieldPropsType = {
  height?: string;
  width?: string;
  font?: string;
  color?: string;
};

export const Form = () => {
  return (
    <StyledForm>
      <Field placeholder="name" />
      <Field placeholder="subject" />
      <Field placeholder="message" as="textarea" height="120px" />
      <Button title="Submit" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;

  ::placeholder {
    color: ${myTheme.colors.lightTheme};
    font-size: 1rem;
  }

  & > textarea {
    resize: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
`;

const Field = styled.input<FieldPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "30px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.font}`};
  padding: 5px 5px 5px 15px;
  line-height: 2;
  border: 2px solid ${myTheme.colors.secondary};
  border-radius: 10px;
  background-color: transparent;
`;