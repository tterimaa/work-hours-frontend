import React from 'react';
import { useHistory } from 'react-router-dom';
import { NonAuthRoutes } from '../random/routes-auth';
import { Button } from 'semantic-ui-react';

export const Dashboard = () => {
    const user = window.localStorage.getItem("loggedUser");
    console.log(user);
    const history = useHistory();
    const logOut = () => {
        window.localStorage.removeItem("loggedUser");
        history.push(NonAuthRoutes.login);
      };
    return (
        <div>
            <h1>Dashboard for logged in user</h1>
            <div>{user}</div>
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}
