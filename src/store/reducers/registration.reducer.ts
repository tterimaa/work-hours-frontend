import { RegistrationActionTypes } from './../actions/registration.actions';

export interface RegistrationState {
  registering: boolean;
}

export const initialState = {
  registering: false,
};

const registrationReducer = (
  state = initialState,
  action: RegistrationActionTypes
): RegistrationState => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { registering: true };
    case "REGISTER_SUCCESS":
      return { registering: false };
    case "REGISTER_FAILED":
      return { registering: false };
    default:
      return state;
  }
};

export default registrationReducer;
