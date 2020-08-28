import React from "react";
import { TextInput } from "./TextInput";
import { Formik, Form } from "formik";
import { Button, Header, Grid, Segment, Message } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import * as Yup from "yup";

export const Login = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log in
        </Header>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form ui">
            <Segment stacked>
              <TextInput
                name="email"
                type="email"
                placeholder="E-mail address"
                icon="user"
              ></TextInput>
              <TextInput
                name="password"
                type="text"
                placeholder="Password"
                icon="lock"
              ></TextInput>
              <Button color="teal" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
        </Formik>
        <Message>
          New to us? <Link to="/sign-up/employee">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
