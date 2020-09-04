import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route
          path="/sign-up/company"
          render={() => <Register userRole="company" />}
        />
        <Route
          path="/sign-up/employee"
          render={() => <Register userRole="employee" />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
