import { UserActionTypes } from './types';
import { DefaultState } from './types';

const defaultState = {
    loggedIn: false,
    user: {},
}

const userReducer = (state = defaultState, action: UserActionTypes): DefaultState => {
    switch(action.type) {
        case "SET_USER":
            return {
                loggedIn: true,
                user: {...action.payload}
            };
        case "LOG_OUT":
            localStorage.clear();
            return {
                loggedIn: false,
                user: {}
            }
        default: return state;
    }
}

export default userReducer;