import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthRoutes, NonAuthRoutes } from "./constants/routes-auth";
import history from "./helpers/history";
import Employee from "./components/employee/Employee";
import { AuthRoute } from "./components/common/AuthRoute";
import { Register } from "./components/login/Register";
import Login from "./components/login/Login";
import Company from "./components/company/Company";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { getUserDetails } from "./store/actions/user.actions";
import { Roles } from "./constants/roles";

const Routes = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.account.role);
  const token = useSelector((state: RootState) => state.auth.token);
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  useEffect(() => {
    if (token) dispatch(getUserDetails(token)); // token to request by axios middleware
  }, [token, dispatch]);

  const getDashboardRoute = (role: string) => {
    switch (role) {
      case Roles.EMPLOYEE:
        return <AuthRoute path={AuthRoutes.home} Component={Employee} />;
      case Roles.EMPLOYER:
        return <AuthRoute path={AuthRoutes.home} Component={Company} />;
      default:
        console.error(`Internal error: there is no role ${role} in the system`);
    }
  };
  return (
    <Switch>
      <Route exact path={NonAuthRoutes.login} component={Login} />
      <Route
        exact
        path={NonAuthRoutes.signUpCompany}
        render={() => <Register userRole={Roles.EMPLOYER} />}
      />
      <Route
        exact
        path={NonAuthRoutes.signUpEmployee}
        render={() => <Register userRole={Roles.EMPLOYEE} />}
      />
      {isLoggedIn ? getDashboardRoute(role) : <Redirect to={NonAuthRoutes.login} />}
    </Switch>
  );
};

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
