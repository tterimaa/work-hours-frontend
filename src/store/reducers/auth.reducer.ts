import { AuthRoute } from './../../components/common/AuthRoute';
import { AuthRoutes, NonAuthRoutes } from "../../constants/routes-auth";
import { authActions, AuthActionTypes } from "./../actions/auth.actions";
import history from "../../helpers/history";

export interface AuthState {
  loggedIn: boolean;
  token: string | null;
  expires: string | null;
}

const auth = window.localStorage.getItem("token");

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
      if (action.payload.token) {
        window.localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        expires: action.payload.expires,
      };
    case authActions.LOG_OUT:

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
