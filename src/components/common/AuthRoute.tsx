import React from "react";
import { RouteComponentProps, Route, Redirect } from "react-router-dom";
import { NonAuthRoutes } from "../../constants/routes-auth";

interface AuthRouteProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

export const AuthRoute = ({
  Component,
  path,
  exact = false,
}: AuthRouteProps): JSX.Element => {
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
