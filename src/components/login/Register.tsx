import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../common/TextInput";
import { Link } from "react-router-dom";
import { Button, Header, Grid, Segment, Message } from "semantic-ui-react";
import registrationService from "../../services/reg";
import { CompanyRegFields, EmployeeRegFields, role } from "../../types";
import { useDispatch } from "react-redux";

type initialValues = Record<role, EmployeeRegFields | CompanyRegFields>;

interface RegisterProps {
  userRole: role;
}

export const Register = ({ userRole }: RegisterProps) => {
  const dispatch = useDispatch();
  const values: initialValues = {
    employee: { email: "", password: "", firstname: "", lastname: "" },
    company: {
      email: "",
      password: "",
      companyName: "",
    },
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Register {userRole}
        </Header>
        <Formik
          initialValues={values[userRole]}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            registrationService.startRegistration(values, userRole, dispatch);
            setSubmitting(false);
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
              {userRole === "employee" && (
                <>
                  <TextInput
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    icon="address card"
                  ></TextInput>
                  <TextInput
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    icon="address card"
                  ></TextInput>
                </>
              )}
              {userRole === "company" && (
                <>
                  <TextInput
                    name="companyName"
                    type="text"
                    placeholder="Company name"
                    icon="address card"
                  ></TextInput>
                </>
              )}
              <Button color="teal" fluid size="large" type="submit">
                Register
              </Button>
            </Segment>
          </Form>
        </Formik>
        <Message>
          Already have an account? <Link to="/login">Login here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
