import React, { useState } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Divider, Header, Container, Menu } from "semantic-ui-react";

const App = () => {
  const [activeItem, setactiveItem] = useState<string>("");
  const handleItemClick = (name: string) => setactiveItem(name);
  return (
    <div className="App">
      <Router>
        <Container text>
          <Header as="h1">Work Hours App</Header>
          <Menu>
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
          </Menu>
          <Divider hidden />
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/sign-up/employer"
              render={() => <Register userRole="employer" />}
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
