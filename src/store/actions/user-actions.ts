import authService from "../../services/auth";
import userService from "../../services/user";
import { IToken } from "../../types";

const setToken = (payload: IToken) => ({ type: "LOG_IN", payload});

const setUser = (payload: any) => ({type: "SET_USER", payload});

export const logOut = () => ({type: "LOG_OUT"});

export const logIn = (user: any) => async (dispatch: any) => {
    const res = await authService.login(user);
    localStorage.setItem("loggedUser", JSON.stringify(res));
    if(res.success) dispatch(setToken({token: res.token, expires: res.expires}));
    const userDetails = await userService.getUserDetails(res.token);
    dispatch(setUser(userDetails));
}
