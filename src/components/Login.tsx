import React from "react";
import { TextInput } from "./TextInput";
import { Formik, Form } from "formik";
import { Button, Header, Grid, Segment, Message } from "semantic-ui-react";
import * as Yup from "yup";
import { SignUpModal } from "./SignUpModal";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "../random/routes-auth";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { logIn } from "../store/actions/user-actions";
import { UserActionTypes } from "../store/actions/action-types";
import { UserState } from "../store/reducers/user-reducer";

const Login = (props: any) => {

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
            await props.logIn(values);
            setSubmitting(false);
            history.push(AuthRoutes.dashboard);
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

const mapDispatchToProps = (dispatch: ThunkDispatch<UserState, void, UserActionTypes>) => {
  return {
    logIn: (userInfo: any) => dispatch(logIn(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Login);