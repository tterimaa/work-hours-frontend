import React from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { Dashboard } from "./components/Dashboard";
import { AuthRoutes, NonAuthRoutes } from "./random/routes-auth";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthRoute exact path={AuthRoutes.dashboard} Component={Dashboard} />
          <Route exact path={NonAuthRoutes.login} component={Login} />
          <Route
            path={NonAuthRoutes.signUpCompany}
            render={() => <Register userRole="company" />}
          />
          <Route
            path={NonAuthRoutes.signUpEmployee}
            render={() => <Register userRole="employee" />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
