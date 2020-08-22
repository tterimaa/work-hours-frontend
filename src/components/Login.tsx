import React from "react";
import { TextInput } from "./TextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const Login = () => {
  return (
    <>
      <h1>Log in</h1>
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
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@email.com"
          ></TextInput>
          <TextInput
            label="Password"
            name="password"
            type="text"
            placeholder="example@email.com"
          ></TextInput>
        </Form>
      </Formik>
    </>
  );
};
