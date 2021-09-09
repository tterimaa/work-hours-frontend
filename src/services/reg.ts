import { registrationStarted, registrationFailed, registrationSuccess } from './../store/actions/registration.actions';
import axios from "axios";
import { Dispatch } from "redux";
import { Roles } from "../constants/roles";
import { CompanyRegFields, EmployeeRegFields, IEmployee, ICompany, role } from "../types";
import { API_URL } from "../constants/api";
import history from "../helpers/history";
import { AuthRoutes } from '../constants/routes-auth';

const register = (user: IEmployee | ICompany, role: role) => {
  return axios.post(API_URL + `/users/register-${role}`, {
    ...user,
    role: role,
  });
};

const startRegistration = async (user: EmployeeRegFields | CompanyRegFields, role: Roles.EMPLOYEE | Roles.EMPLOYER, dispatch: Dispatch) => {
  dispatch(registrationStarted());
  try {
      await register(user, role);
      dispatch(registrationSuccess());
      history.push(AuthRoutes.home);
  } catch(error) {
      console.error(error);
      dispatch(registrationFailed());
  }
};

const registrationService = { startRegistration };
export default registrationService;
