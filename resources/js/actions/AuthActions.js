import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    VALIDATE_ID_TOKEN,
    VALIDATE_ID_TOKEN_SUCCESS,
    VALIDATE_ID_TOKEN_FAILURE
} from './types';

/**
 * Redux Action To Signup User In Laravel
 */
export const action_signup_user = (userInfo, history) => ({
    type: SIGNUP_USER,
    payload: { userInfo, history }
});

export const action_signup_user_success = (uid) => ({
    type: SIGNUP_USER_SUCCESS,
    payload: uid
});

export const action_signup_user_failed = (error) => ({
    type: SIGNUP_USER_FAILURE,
    payload: error
})

/**
 * Redux Action To Signin User In Laravel
 */
export const action_signin_user = (userInfo, history) => ({
    type: LOGIN_USER,
    payload: { userInfo, history }
})

export const action_signin_user_success = (uid) => ({
    type: LOGIN_USER_SUCCESS,
    payload: uid
})

export const action_signin_user_failed = (err) => ({
    type: LOGIN_USER_FAILURE,
    payload: err
})

/**
 * Redux Action To Logout User In Laravel
 */
export const action_logout_user = (userInfo, history) => ({
    type: LOGOUT_USER,
    payload: { userInfo, history }
})

export const action_logout_user_success = (userName) => ({
    type: LOGOUT_USER_SUCCESS,
    payload: userName
})

export const action_logout_user_failed = (err) => ({
    type: LOGOUT_USER_FAILURE,
    payload: err
})

/**
 * Redux Action To Logout User In Laravel
 */
export const action_validate_token = (userInfo, history) => ({
    type: VALIDATE_ID_TOKEN,
    payload: { userInfo, history }
})

export const action_validate_token_success = (roll) => ({
    type: VALIDATE_ID_TOKEN_SUCCESS,
    payload: roll
})

export const action_validate_token_failed = () => ({
    type: VALIDATE_ID_TOKEN_FAILURE
})