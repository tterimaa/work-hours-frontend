import React, { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { Formik, Form } from "formik";
import { Button, Header, Grid, Segment, Message } from "semantic-ui-react";
import * as Yup from "yup";
import authService from "../services/auth";
import { SignUpModal } from "./SignUpModal";
import { Redirect, useHistory } from "react-router-dom";

export const Login = () => {

  const history = useHistory();

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
          onSubmit={async(values, { setSubmitting }) => {
            const response = await authService.login(values).catch(error => {
                console.error(error);
                throw new Error(error);
            });
            window.localStorage.setItem('loggedUser', JSON.stringify(response))
            setSubmitting(false);
            history.push("/");
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
          New to us? <SignUpModal></SignUpModal>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
