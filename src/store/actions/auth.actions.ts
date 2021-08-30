import authService from "../../services/auth";
import { IToken } from "../../types";
import history from "../../helpers/history";
import { AuthRoutes } from "../../routes-auth";

export const authActions = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const logIn = (payload: IToken) => ({ type: authActions.LOG_IN, payload });

export const logOut = () => {
  authService.logOut();
  return { type: authActions.LOG_OUT, payload: { token: null, expires: null } };
};

export type AuthActionTypes =
  | ReturnType<typeof logIn>
  | ReturnType<typeof logOut>;

export const startLogIn = (user: any) => async (dispatch: any) => {
  const { token, expires } = await authService.logIn(user);
  dispatch(logIn({ token, expires }));
  history.push(AuthRoutes.home);
};
