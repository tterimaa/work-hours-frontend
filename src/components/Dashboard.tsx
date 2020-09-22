import React from "react";
import { useHistory } from "react-router-dom";
import { NonAuthRoutes } from "../random/routes-auth";
import { Button } from "semantic-ui-react";
import { logOut } from "../store/actions/user-actions";
import { connect } from "react-redux";

const Dashboard = (props: any) => {
  const user = window.localStorage.getItem("loggedUser");
  console.log(user);
  const history = useHistory();
  const logOut = () => {
    props.logOut();
    history.push(NonAuthRoutes.login);
  };
  return (
    <div>
      <h1>Dashboard for logged in user</h1>
      <div>{user}</div>
      <Button onClick={() => logOut()}>Log out</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
