import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { getUserDetails } from "../store/actions/user.actions";
import { logOut } from "../store/actions/auth.actions"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import Employee from "./employee/Employee";
import Company from "./company/Company";

const Home = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.account.role);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if(token) dispatch(getUserDetails(token)) // token to request by axios middleware
  }, [token, dispatch])

  const renderDashboard = (param: string) => {
    switch(param) {
      case "employee":
        return <Employee />
      case "company": 
        return <Company />
      default: return <></>
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
