import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Form } from "../../components/Form";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle title="Contacts" />
      <Form />
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin: 0 auto;
`;