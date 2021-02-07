import { CompanyDetails, EmployeeDetails } from "../../types";
import { UserActionTypes, userActions } from "../actions/user.actions";

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
