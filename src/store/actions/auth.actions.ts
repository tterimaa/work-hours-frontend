import { IToken } from "../../types";

export const authActions = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

export const logIn = (payload: IToken) => ({ type: authActions.LOG_IN, payload });

export const logOut = () => ({ type: authActions.LOG_OUT, payload: { token: null, expires: null }});

export type AuthActionTypes =
  | ReturnType<typeof logIn>
  | ReturnType<typeof logOut>;


