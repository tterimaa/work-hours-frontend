import React from "react";
import { RouteComponentProps, Route, Redirect } from "react-router-dom";
import { NonAuthRoutes } from "../random/routes-auth";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

export const AuthRoute = ({
  Component,
  path,
  exact = false,
}: Props): JSX.Element => {
  const isAuthed = !!localStorage.getItem("loggedUser");
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: NonAuthRoutes.login,
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};
