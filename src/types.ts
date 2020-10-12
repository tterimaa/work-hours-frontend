export interface IEmployee {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

export interface ICompany {
  email: string;
  password: string;
  companyName?: string;
}

export interface IToken {
  token: string;
  expires: string;
}

export interface IResponse {
  success: boolean;
}
