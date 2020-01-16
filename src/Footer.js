import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";
import SourceForm from "./forms/SourceForm";

const StyledFooter = styled.div`
  color: red;
`;

export default function Footer() {
  const [modalOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledFooter>
      <Modal
        open={modalOpen}
        trigger={
          <Button icon onClick={() => setOpen(true)}>
            <Icon name="add" /> New Source
          </Button>
        }
      >
        <Modal.Header>Add a New Source</Modal.Header>
        <Modal.Content image>
          <SourceForm handleClose={handleClose} />
        </Modal.Content>
      </Modal>
      <SourceForm />
    </StyledFooter>
  );
}
