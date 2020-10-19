import userReducer, { UserState } from "./reducers/user.reducer";
import { combineReducers } from "redux";
import registrationReducer, { RegistrationState } from "./reducers/registration.reducer";
import authReducer, { AuthState } from "./reducers/auth.reducer";

export interface RootState {
    user: UserState;
    auth: AuthState
    registration: RegistrationState
}

const rootReducer = combineReducers<RootState>({
    user: userReducer,
    auth: authReducer,
    registration: registrationReducer
})

export default rootReducer