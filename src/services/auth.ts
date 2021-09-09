import axios from "axios";
import { IToken, IResponse } from "../types";

const API_URL = "http://localhost:3000";

interface IUser {
    email: string,
    password: string,
}

interface IEmployee extends IUser {
  firstname?: string;
  lastname?: string;
}

interface ICompany extends IUser {
  companyName?: string;
}

type role = "employee" | "company";

type LoginResponse = IToken & IResponse;

const register = (user: IEmployee | ICompany, role: role) => {
  return axios.post(API_URL + `/users/register-${role}`, {
    ...user,
    role: role,
  });
};

const logIn = async (user: IUser): Promise<LoginResponse> => {
    const response = await axios.post(API_URL + `/users/login`, user);
    localStorage.setItem("loggedUser", JSON.stringify(response.data));
    return response.data;
}

export default { register, logIn };
