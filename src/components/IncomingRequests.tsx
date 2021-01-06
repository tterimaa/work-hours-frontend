import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import userService from '../services/user'
import { RootState } from '../store';

export const IncomingRequests = () => {
    const [requesters, setRequesters] = useState([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState) => state.user.account._id);

    useEffect(() => {
        const getRequestsAsync = async () => {
            const res = await userService.getIncomingRequests(token, userId);
            setRequesters(res.incomingRequests);
        }
        getRequestsAsync();
    }, [token, userId]);

    return (
        <div>
            <h1>Incoming requests</h1>
            {
                requesters.map((requester: any) => <p>{requester?.email}</p>)
            }
        </div>
    )
}
