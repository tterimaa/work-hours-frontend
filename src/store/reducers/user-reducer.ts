import { IToken } from "../../types";
import { UserActionTypes } from "../actions/action-types";

export interface UserState {
  loggedIn: boolean;
  auth: IToken | null;
  user: any;
}

const defaultState: UserState = {
  loggedIn: false,
  auth: null,
  user: {},
};

const userReducer = (
  state = defaultState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedIn: true,
        auth: { token: action.payload.token, expires: action.payload.expires },
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        loggedIn: false,
        auth: null,
        user: {},
      };
    case "SET_USER":
        return {
            ...state,
            user: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
