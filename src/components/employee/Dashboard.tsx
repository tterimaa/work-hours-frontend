import React from 'react'
import { useSelector } from 'react-redux'
import { isEmployeeState } from '../../helpers/utils'
import { RootState } from '../../store'
import CompanyList from './CompanyList'
import { IncomingRequests } from './IncomingRequests'

const Employers = () => {
    // const companies = useSelector((state: RootState) => {
    //     if(isEmployeeState(state.user)) {
    //         return state.user.companies;
    //     }
    // })
    return (
        <div>
            <p>Route to dashboard component</p>
            {/* <IncomingRequests />
            <CompanyList companies={companies} /> */}
        </div>
    )
}

export default Employers;
