import React from "react";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledFooter = styled.div`
  color: red;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Button icon>
        <Icon name="add" /> New Source
      </Button>
    </StyledFooter>
  );
}
