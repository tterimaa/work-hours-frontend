import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes-auth";
import { AuthRoute } from "../common/AuthRoute";
import Nav from "../common/Nav";
import Dashboard from "./Dashboard";
import Employers from "./Employers";

const Employee = () => {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <AuthRoute path={AuthRoutes.dashboard} Component={Dashboard}></AuthRoute>
        <AuthRoute path={AuthRoutes.employers} Component={Employers}></AuthRoute>
      </Switch>
      <Redirect to={AuthRoutes.dashboard} />
    </>
  );
};

export default Employee;
