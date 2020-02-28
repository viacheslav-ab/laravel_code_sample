/**
 * Auth Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { Post_Request } from '../global/Request'
import { NotificationManager } from 'react-notifications';

import {
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    VALIDATE_ID_TOKEN
} from '../actions/types';

import {
    action_signup_user_success,
    action_signup_user_failed,
    action_signin_user_success,
    action_signin_user_failed,
    action_logout_user_success,
    action_logout_user_failed,
    action_validate_token_success,
    action_validate_token_failed
} from '../actions'

const createUserWithEmailPasswordRequest = (url, params) => {
    return Post_Request(url, params)
}

function* signiInUser({ payload }) {
    const { userInfo, history } = payload

    try {
        const result = yield call(Post_Request, '/signin', userInfo)
        // console.log("signinn result ====>", result)
        if (result.status === 1) {
            localStorage.setItem('user_id', result.data.idToken)
            yield put(action_signin_user_success(result.data.idToken))
            history.replace('/dashboard')
        }
        else {
            yield put(action_signin_user_failed(result.msg))
        }
    }
    catch (error) {
        // console.log(error.response.data.errors)
        yield put(action_signin_user_failed("It seems something error. please try again later"))
    }
}

function* signUpUser({ payload }) {
    const { userInfo, history } = payload
    try {
        const result = yield call(createUserWithEmailPasswordRequest, '/signup', userInfo)
        // console.log("singup===>", result)
        if (result.status === 1) {
            localStorage.setItem('user_id', result.data.idToken)
            yield put(action_signup_user_success(result.data.idToken))
            history.replace('/dashboard')
        }
        else {
            yield put(action_signup_user_failed(result.msg))
        }
    }
    catch (error) {
        // console.log(error.response.data.errors)
        yield put(action_signup_user_failed("It seems something error. please try again later"))
    }
}

function* logoutUser({ payload }) {
    const { userInfo, history } = payload
    console.log("logout userInfo", userInfo)
    try {
        const result = yield call(Post_Request, '/logout', userInfo)
        if (result.status === 1) {            
            localStorage.removeItem('user_id')
            yield put(action_logout_user_success(result.data.name))
            history.replace('/signin')
        }
        else {
            yield put(action_logout_user_failed(result.msg))
        }
    }
    catch (error) {
        console.log(error.response.data.errors)
        yield put(action_logout_user_failed("It seems something error. please try again later"))
    }
}

function* validate_token({payload}) {
    const {userInfo, history} = payload
    try {
        const result = yield call(Post_Request, '/validateToken', userInfo)
        // console.log("validateTokenResult: ", result)
        if (result.status === 1) {                      
            yield put(action_validate_token_success(result))
        }
        else {
            localStorage.removeItem('user_id')
            yield put(action_validate_token_failed())
            history.replace('/signin')
        }
    }
    catch (error) {
        localStorage.removeItem('user_id')
        yield put(action_validate_token_failed())
        history.replace('/signin')
    }
}

export function* middle_signin() {
    yield takeEvery(LOGIN_USER, signiInUser)
}

export function* middle_signup() {
    yield takeEvery(SIGNUP_USER, signUpUser)
}

export function* middle_logout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

export function* middle_validate_token() {
    yield takeEvery(VALIDATE_ID_TOKEN, validate_token)
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        fork(middle_signin),
        fork(middle_signup),
        fork(middle_logout),
        fork(middle_validate_token)
    ])
}