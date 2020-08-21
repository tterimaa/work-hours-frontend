import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./FormFields";

export const Register: React.FC = () => {
  return (
    <>
      <h1>Register employee</h1>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          role: "employee",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Firstname"
          ></TextInput>
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Lastname"
          ></TextInput>
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@email.com"
          ></TextInput>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
