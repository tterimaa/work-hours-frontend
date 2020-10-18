import authService from "../../services/auth";
import userService from "../../services/user";
import { IToken } from "../../types";
import history from "../../helpers/history";
import { AuthRoutes } from "../../random/routes-auth";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logIn = (payload: IToken) => ({ type: LOG_IN, payload});

const setUser = (payload: any) => ({type: SET_USER, payload});

export const logOut = () => {
    authService.logOut();
    return { type: LOG_OUT};
}

export type UserActionTypes = ReturnType<typeof logIn> | ReturnType<typeof setUser> | ReturnType<typeof logOut>;

export const startLogIn = (user: any) => async (dispatch: any) => {
    const res = await authService.logIn(user).catch(err => { throw new Error(err) });
    dispatch(logIn({token: res.token, expires: res.expires}));
    const userDetails = await userService.getUserDetails(res.token);
    dispatch(setUser(userDetails));
    history.push(AuthRoutes.home);
}

