import { Roles } from "./constants/roles";

export interface IToken {
  token: string;
  expires: string;
}

export interface IResponse {
  success: boolean;
}

export interface Account {
  _id: string;
  email: string;
  role: string;
}

export interface CompanyDetails {
  account: Account;
  employees: Account[];
  companyName: string;
}

export interface EmployeeDetails {
  account: Account;
  firstname?: string;
  lastname?: string;
  companies?: Account[];
}

export interface EmployeeRegFields {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

export interface CompanyRegFields {
  email: string;
  password: string;
  companyName?: string;
}


export interface IUser {
  email: string,
  password: string,
}

export interface IEmployee extends IUser {
firstname?: string;
lastname?: string;
}

export interface ICompany extends IUser {
companyName?: string;
}

export type role = Roles.EMPLOYEE | Roles.EMPLOYER;

export type LoginResponse = IToken & IResponse;
