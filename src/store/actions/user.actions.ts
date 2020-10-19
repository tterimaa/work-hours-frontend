import userService from "../../services/user";

export const userActions = {
    SET_USER: "SET_USER",
}

const setUser = (payload: any) => ({type: userActions.SET_USER, payload});

export type UserActionTypes = ReturnType<typeof setUser>;

export const getUserDetails = (token: string) => async (dispatch: any) => {
    const userDetails = await userService.getUserDetails(token);
    dispatch(setUser(userDetails));
}

