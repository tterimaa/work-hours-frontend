import React from "react";
import { Register } from "./components/Register";
import Login from "./components/Login";
import { Router, Route, Switch } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import Home from "./components/Home";
import { AuthRoutes, NonAuthRoutes } from "./routes-auth";
import history from "./helpers/history";

const Routes = () => {
  return (
    <Switch>
      <AuthRoute exact path={AuthRoutes.home} Component={Home} />
      <Route exact path={NonAuthRoutes.login} component={Login} />
      <Route
        exact
        path={NonAuthRoutes.signUpCompany}
        render={() => <Register userRole="company" />}
      />
      <Route
        exact
        path={NonAuthRoutes.signUpEmployee}
        render={() => <Register userRole="employee" />}
      />
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
