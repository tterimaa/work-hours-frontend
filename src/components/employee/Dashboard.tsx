import React from 'react'
import { useSelector } from 'react-redux'
import { isEmployeeState } from '../../helpers/utils'
import { RootState } from '../../store'
import CompanyList from './CompanyList'
import { IncomingRequests } from './IncomingRequests'

const Dashboard = () => {
    return (
        <div>
            <p>Route to dashboard component</p>
        </div>
    )
}

export default Dashboard;
