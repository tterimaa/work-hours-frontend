import history from './../../helpers/history';
import { Dispatch } from "redux";
import authService from "../../services/auth";
import { CompanyRegFields, EmployeeRegFields } from "../../types";
import { AuthRoutes } from '../../random/routes-auth';

export const regActions = {
    REG_REQ: "REGISTER_REQUEST",
    REG_SUCCESS: "REGISTER_SUCCESS",
    REG_FAILED: "REGISTER_FAILED"
}

const registrationStarted = () => ({ type: regActions.REG_REQ });

const registrationSuccess = () => ({ type: regActions.REG_SUCCESS });

const registrationFailed = () => ({ type: regActions.REG_FAILED });

export type RegistrationActionTypes = ReturnType<typeof registrationStarted> | ReturnType<typeof registrationSuccess> | ReturnType<typeof registrationFailed>;

export const startRegistration = (user: EmployeeRegFields | CompanyRegFields, role: "employee" | "company") => async (dispatch: Dispatch) => {
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
