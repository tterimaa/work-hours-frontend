import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { AuthRoutes, NonAuthRoutes } from "./constants/routes-auth";
import history from "./helpers/history";
import { AuthRoute } from "./components/common/AuthRoute";
import { Register } from "./components/login/Register";
import Login from "./components/login/Login";
import { Roles } from "./constants/roles";
import Home from "./components/Home";

const Routes = () => {
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
      <AuthRoute path={AuthRoutes.home} Component={Home} />;
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
