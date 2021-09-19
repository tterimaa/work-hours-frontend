import React from 'react'
import { useSelector } from 'react-redux'
import { isCompanyState } from '../../helpers/utils'
import { RootState } from '../../store'
import EmployeeList from './EmployeeList'
import { Requests } from './Requests'

const Company = () => {
    const employees = useSelector((state: RootState) => {
        if(isCompanyState(state.user)) {
            return state.user.employees;
        } 
    })

    return (
        <div>
            This is the home page for company. In progress..
            <Requests />
            <EmployeeList employees={employees} />
        </div>
    )
}

export default Company