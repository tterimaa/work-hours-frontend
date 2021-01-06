import React from 'react'
import EmployeeList from './EmployeeList'
import { Requests } from './Requests'

const Company = () => {
    return (
        <div>
            This is the home page for company
            <Requests />
            <EmployeeList />
        </div>
    )
}

export default Company