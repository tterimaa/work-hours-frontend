import { CompanyDetails, EmployeeDetails } from "../types";


export const isCompanyState = (
  userState: EmployeeDetails | CompanyDetails
): userState is CompanyDetails => {
  return (userState as CompanyDetails).employees !== undefined;
};

export const isEmployeeState = (
  userState: EmployeeDetails | CompanyDetails
): userState is EmployeeDetails => {
  return (userState as EmployeeDetails).companies !== undefined;
};
