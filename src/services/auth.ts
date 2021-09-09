import { AuthRoute } from "./../components/common/AuthRoute";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import axios from "axios";
import { IUser, LoginResponse } from "../types";
import { API_URL } from "../constants/api";
import { logIn, logOut } from "../store/actions/auth.actions";
import history from "../helpers/history";
import { AuthRoutes, NonAuthRoutes } from "../constants/routes-auth";

const requestLogIn = async (user: IUser): Promise<LoginResponse> => {
  const response = await axios.post(API_URL + `/users/login`, user);
  return response.data;
};

const startLogIn = async (user: IUser, dispatch: Dispatch) => {
  const { token, expires } = await requestLogIn(user);
  dispatch(logIn({ token, expires }));
  history.push(AuthRoutes.home);
};

const startLogOut = async (dispatch: Dispatch) => {
    dispatch(logOut());
    window.localStorage.removeItem("token");
    history.push(NonAuthRoutes.login);
}

const authService = { startLogIn, startLogOut };
export default authService;
