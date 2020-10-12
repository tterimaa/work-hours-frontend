import { IToken } from "../../types";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

interface LogInAction {
    type: typeof LOG_IN,
    payload: IToken,
}

interface LogOutAction {
    type: typeof LOG_OUT
}

interface SetUserAction {
    type: typeof SET_USER,
    payload: any
}

export type UserActionTypes = LogInAction | LogOutAction | SetUserAction;