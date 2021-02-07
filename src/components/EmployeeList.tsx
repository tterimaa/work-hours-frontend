import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { CompanyDetails, EmployeeDetails } from '../store/reducers/user.reducer';

interface Account {
    _id: string;
    email: string;
    role: string;
  }

const EmployeeList = () => {
    const isCompanyState = (userState: EmployeeDetails | CompanyDetails): userState is CompanyDetails => {
        return (userState as CompanyDetails).employees !== undefined;
    }

    const employees = useSelector((state: RootState) => {
        let employees: Account[] = [];
        if(isCompanyState(state.user)) {
            employees = state.user.employees;
        }
        return employees;
    })

    return (
        <div>
            <h1>List of my employees</h1>
            {
                employees?.map(employee => <p>{employee.email}</p>)
            }
        </div>
    )
}

export default EmployeeList;
