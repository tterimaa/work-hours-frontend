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
