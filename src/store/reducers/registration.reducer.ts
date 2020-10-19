import { RegistrationActionTypes, regActions } from './../actions/registration.actions';

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
    case regActions.REG_REQ:
      return { registering: true };
    case regActions.REG_SUCCESS:
      return { registering: false };
    case regActions.REG_FAILED:
      return { registering: false };
    default:
      return state;
  }
};

export default registrationReducer;
