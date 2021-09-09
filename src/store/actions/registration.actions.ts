export const regActions = {
    REG_REQ: "REGISTER_REQUEST",
    REG_SUCCESS: "REGISTER_SUCCESS",
    REG_FAILED: "REGISTER_FAILED"
}

export const registrationStarted = () => ({ type: regActions.REG_REQ });

export const registrationSuccess = () => ({ type: regActions.REG_SUCCESS });

export const registrationFailed = () => ({ type: regActions.REG_FAILED });

export type RegistrationActionTypes = ReturnType<typeof registrationStarted> | ReturnType<typeof registrationSuccess> | ReturnType<typeof registrationFailed>;


