import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import userService from "../services/user";
import { RootState } from "../store";
import { TextInput } from "./TextInput";

export type Status = 1 | 2 | 3;

export interface IRequestModel {
  _id: string;
  status: Status;
  from: IAccountModel["_id"][];
  to: IAccountModel["_id"][];
}

export interface IAccountModel {
  _id: string;
  email: string;
  password: string;
  role: string;
  requests: IRequestModel[];
}

interface PopulatedEmployee {
  account: IAccountModel;
  firstname: string;
  lastname: string;
  companies: string[];
}

export const Requests = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [found, setFound] = useState<
    PopulatedEmployee | null
  >(null);

  const sendRequest = async () => {
      if(found) {
        await userService.sendRequest(token, found.account._id)
        setFound(null);
      }
  }
  return (
    <div>
      <h1>Find users</h1>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const user = await userService.findUserByEmail(token, values.email);
          setFound(user);
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            name="email"
            type="email"
            placeholder="E-mail address"
            icon="user"
          ></TextInput>
          <Button color="teal" size="large" type="submit">
            Search users
          </Button>
        </Form>
      </Formik>
      {found ? <>{found.account.email}
      <Button onClick={sendRequest}>Connect</Button></> : <></>}
    </div>
  );
};
