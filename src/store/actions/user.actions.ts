import { Dispatch } from 'redux';
import userService from "../../services/user";
import { CompanyDetails, EmployeeDetails } from '../../types';

export const userActions = {
    SET_USER: "SET_USER",
}

const setUser = (payload: EmployeeDetails | CompanyDetails) => ({type: userActions.SET_USER, payload});

export type UserActionTypes = ReturnType<typeof setUser>;

export const getUserDetails = (token: string) => async (dispatch: Dispatch) => {
    const userDetails = await userService.getUserDetails(token);
    dispatch(setUser(userDetails));
}

