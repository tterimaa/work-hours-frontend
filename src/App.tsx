import React from "react";
import { Container } from "semantic-ui-react";
import hourService from "./services/Hour";
import { Header, Button } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const user = window.localStorage.getItem("loggedUser");

  const logOut = () => {
    window.localStorage.removeItem("loggedUser");
    history.push("/login");
  };
  
  return (
    <div className="App">
      {user ? <Container text><h1>Hello this is front page</h1>
            <Header>You are logged in</Header>
            <Button onClick={logOut}>Log out</Button>
      </Container> : <Redirect to="/login"></Redirect>}
    </div>
  )
};

export default App;
