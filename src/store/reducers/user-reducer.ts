import { IToken } from "../../types";
import { UserActionTypes } from "../actions/action-types";

interface Account {
  _id: string,
  email: string,
  role: string
}

interface Company {
  employees: string[],
  _id: string,
  account: Account,
  companyName: string,
}

interface Employee {
  account: Account,
  firstname?: string,
  lastname?: string,
  companies?: string[]   
}

export interface UserState {
  loggedIn: boolean;
  auth: IToken | null;
  user: Company | Employee | null;
}

const initialState: UserState = {
  loggedIn: false,
  auth: null,
  user: null,
};

const userReducer = (
  state = initialState,
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
        user: null
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
