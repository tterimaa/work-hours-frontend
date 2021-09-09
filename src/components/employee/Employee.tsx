import React from "react";
import { useSelector } from "react-redux";
import { Redirect, RouteComponentProps, Switch } from "react-router-dom";
import { isEmployeeState } from "../../helpers/utils";
import { AuthRoutes } from "../../constants/routes-auth";
import { RootState } from "../../store";
import { AuthRoute } from "../common/AuthRoute";
import Nav from "../common/Nav";
import CompanyList from "./CompanyList";
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
