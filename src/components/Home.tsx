import React from "react";
import { Button } from "semantic-ui-react";
import { logOut } from "../store/actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import Employee from "./Employee";
import Company from "./Company";

const Home = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.user?.account.role);

  const renderDashboard = (param: string | undefined) => {
    switch(param) {
      case "employee":
        return (<Employee />)
      case "company": 
        return (<Company />)
      default: return (<div>Default</div>)
    }
  }
  return (
    <div>
      <h1>Home for logged in user</h1>
      {renderDashboard(role)}
      <Button onClick={() => dispatch(logOut())}>Log out</Button>
    </div>
  );
};

export default Home;
