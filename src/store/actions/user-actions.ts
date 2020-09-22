import authService from "../../services/auth";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_out";

const setUser = (payload: any) => ({ type: "SET_USER", payload});

export const logOut = () => ({type: "LOG_OUT"});

export const logIn = (user: any) => async (dispatch: any) => {
    const usr = await authService.login(user);
    localStorage.setItem("loggedUser", JSON.stringify(usr));
    dispatch(setUser(usr));
}
