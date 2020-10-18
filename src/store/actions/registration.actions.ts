import history from './../../helpers/history';
import { Dispatch } from "redux";
import authService from "../../services/auth";
import { ICompany, IEmployee } from "../../types";
import { AuthRoutes } from '../../random/routes-auth';

const REG_REQ = "REGISTER_REQUEST";
const REG_SUCCESS = "REGISTER_SUCCESS";
const REG_FAILED = "REGISTER_FAILED";

const registrationStarted = () => ({ type: REG_REQ });

const registrationSuccess = () => ({ type: REG_SUCCESS });

const registrationFailed = () => ({ type: REG_FAILED });

export type RegistrationActionTypes = ReturnType<typeof registrationStarted> | ReturnType<typeof registrationSuccess> | ReturnType<typeof registrationFailed>;

export const startRegistration = (user: IEmployee | ICompany, role: "employee" | "company") => async (dispatch: Dispatch) => {
  dispatch(registrationStarted());
  try {
      await authService.register(user, role);
      dispatch(registrationSuccess());
      history.push(AuthRoutes.home);
  } catch(error) {
      console.error(error);
      dispatch(registrationFailed());
  }
};
