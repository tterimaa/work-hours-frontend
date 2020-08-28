import axios from "axios";

const API_URL = "http://localhost:3000/";

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

const register = (user: IEmployee | ICompany, role: role) => {
  return axios.post(API_URL + `users/register-${role}`, {
    ...user,
    role: role,
  });
};

const login = async (user: IUser) => {
    const response = await axios.post(API_URL + `users/login`, user);
    return response.data;
}

const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
}

export { register, login, logout };
