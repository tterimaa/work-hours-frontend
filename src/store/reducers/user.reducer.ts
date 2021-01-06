import { IEmployee } from './../../types';
import { UserActionTypes, userActions } from "../actions/user.actions";

interface Account {
  _id: string;
  email: string;
  role: string;
}

export interface CompanyDetails {
  account: Account;
  employees?: IEmployee[];
  companyName: string;
}

export interface EmployeeDetails {
  account: Account;
  firstname?: string;
  lastname?: string;
  companies?: string[];
}

export type UserState = EmployeeDetails | CompanyDetails;

const initialState = {
  account: {
    _id: "",
    email: "",
    role: "",
  }
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
