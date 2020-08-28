import { Register } from "./components/Register";
import { Login } from "./components/Login";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Divider, Header, Container, Menu } from "semantic-ui-react";
import * as hourService from "./services/Hour";
import * as authService from "./services/auth";

const App = () => {
  const [activeItem, setactiveItem] = useState<string>("");
  const handleItemClick = (name: string) => setactiveItem(name);
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
          <Header as="h1">Work Hours App</Header>
          <Menu>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={activeItem === "home"}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/login"
              name="login"
              active={activeItem === "login"}
              onClick={() => handleItemClick("login")}
            >
              Login
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/sign-up/employee"
              name="sign-employee"
              active={activeItem === "sign-employee"}
              onClick={() => handleItemClick("sign-employee")}
            ></Menu.Item>
            <Menu.Item
              as={Link}
              to="/sign-up/employer"
              name="sign-employer"
              active={activeItem === "sign-employer"}
              onClick={() => handleItemClick("sign-employer")}
            ></Menu.Item>
            {user && (
              <Menu.Item
                name="logout"
                onClick={() => authService.logout()}
              ></Menu.Item>
            )}
          </Menu>
          {user && <Header>You are currently logged in</Header>}
          <Divider hidden />
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
