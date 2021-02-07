import React from 'react'
import CompanyList from './CompanyList'
import { IncomingRequests } from './IncomingRequests'

export const Employee = () => {
    return (
        <div>
            This is the home page for employee
            <IncomingRequests />
            <CompanyList />
        </div>
    )
}

export default Employee;