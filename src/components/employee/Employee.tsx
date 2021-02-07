import React from 'react'
import { useSelector } from 'react-redux'
import { isEmployeeState } from '../../helpers/utils'
import { RootState } from '../../store'
import CompanyList from './CompanyList'
import { IncomingRequests } from './IncomingRequests'

export const Employee = () => {
    const companies = useSelector((state: RootState) => {
        if(isEmployeeState(state.user)) {
            return state.user.companies;
        }
    })
    
    return (
        <div>
            This is the home page for employee
            <IncomingRequests />
            <CompanyList companies={companies} />
        </div>
    )
}

export default Employee;