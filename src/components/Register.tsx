import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";

interface RegisterProps {
  userRole: string;
}

export const Register: React.FC<RegisterProps> = ({ userRole }) => {
  return (
    <>
      <h1>Register {userRole}</h1>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          role: userRole,
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
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@email.com"
          ></TextInput>
          <TextInput
          label="Password"
          name="password"
          type="text"
          placeholder="password"
        ></TextInput>
          {userRole === "employee" && (
            <>
              <TextInput
                label="First Name"
                name="firstname"
                type="text"
                placeholder="Firstname"
              ></TextInput>
              <TextInput
                label="Last Name"
                name="lastname"
                type="text"
                placeholder="Lastname"
              ></TextInput>
            </>
          )}
          {userRole === "employer" && (
            <>
              <TextInput
                label="Company name"
                name="companyName"
                type="text"
                placeholder="Company name"
              ></TextInput>
            </>
          )}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
