import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes-auth";
import { RootState } from "../../store";
import { getUserDetails } from "../../store/actions/user.actions";
import Employers from "../employee/Employers";
import Dashboard from "../employee/Dashboard";
import { AuthRoute } from "./AuthRoute";
import Nav from "./Nav";
import Employee from "../employee/Employee";
import Company from "../company/Company";
import { Roles } from "../../constants/roles";

// const Employee = () => {
//   return (
//     <>
//       <Nav></Nav>
//       <Redirect to={AuthRoutes.dashboard} />
//       <Switch>
//         <AuthRoute
//           path={AuthRoutes.dashboard}
//           Component={Dashboard}
//         ></AuthRoute>
//         <AuthRoute
//           path={AuthRoutes.employers}
//           Component={Employers}
//         ></AuthRoute>
//       </Switch>
//     </>
//   );
// };

export const Home = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.account.role);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) dispatch(getUserDetails(token)); // token to request by axios middleware
  }, [token, dispatch]);

  if (role === Roles.EMPLOYEE) {
    return (
      <>
        <Employee></Employee>
      </>
    );
  } else if (role === Roles.EMPLOYER) {
    return (
      <>
        <Company></Company>
      </>
    );
  }

  return <><p>Internal error: role {role} is not one of the valid roles.</p></>
};

export default Home;
