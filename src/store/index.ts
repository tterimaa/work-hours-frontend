import userReducer, { UserState } from "./reducers/user-reducer";
import { combineReducers } from "redux";
import registrationReducer, { RegistrationState } from "./reducers/registration.reducer";

export interface RootState {
    user: UserState;
    registration: RegistrationState
}

const rootReducer = combineReducers<RootState>({
    user: userReducer,
    registration: registrationReducer
})

export default rootReducer