export interface DefaultState {
    loggedIn: boolean,
    user: any
}

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

interface LogInAction {
    type: typeof SET_USER,
    payload: any,
}

interface LogOutAction {
    type: typeof LOG_OUT
}

export type UserActionTypes = LogInAction | LogOutAction;