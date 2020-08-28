import { Register } from "./components/Register";
import { Login } from "./components/Login";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";
import hourService from "./services/Hour";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      hourService.setToken(user.token);
      console.log(`User is logged in: ${loggedUser}`);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Container text>
          {!user && <Redirect to="/login"></Redirect>}
          <Switch>
            <Route path="/login" render={() => <Login setUser={setUser} />} />
            <Route
              path="/sign-up/employer"
              render={() => <Register userRole="company" />}
            />
            <Route
              path="/sign-up/employee"
              render={() => <Register userRole="employee" />}
            />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
