import { authActions, AuthActionTypes } from './../actions/auth.actions';

export interface AuthState {
  loggedIn: boolean;
  token: string | null;
  expires: string | null;
}

const auth = window.localStorage.getItem("loggedUser");

const initialState: AuthState = auth
  ? {
      loggedIn: true,
      token: JSON.parse(auth).token,
      expires: JSON.parse(auth).expires,
    }
  : {
      loggedIn: false,
      token: null,
      expires: null,
    };

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case authActions.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        expires: action.payload.expires,
      };
    case authActions.LOG_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        token: null,
        expires: null,
      };
    default:
      return state;
  }
};

export default authReducer;
