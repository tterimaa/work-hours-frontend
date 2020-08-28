import React, { useState } from "react";
import { Button, Grid, Modal, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const SignUpModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Modal
    basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{
          color: "teal",
          padding: "2px",
          background: "transparent"
      }}>Sign up here</Button>}
    >
      <Header icon>
          <Icon name="user" />
          Select user type
        </Header>
      <Modal.Content>
        <Grid columns="equal">
            <Grid.Column>
                <Button as={Link} to="/sign-up/employee" inverted color="teal" fluid size="large">Employee</Button>
            </Grid.Column>
            <Grid.Column>
                <Button as={Link} to="/sign-up/company" inverted color="teal" fluid size="large">Company</Button>
            </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};
