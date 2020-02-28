/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,    
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    VALIDATE_ID_TOKEN,
    VALIDATE_ID_TOKEN_SUCCESS,
    VALIDATE_ID_TOKEN_FAILURE
} from '../actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    roll: "user",
    imgUrl: null,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS:
            NotificationManager.success('Welcome!!');
            return { ...state, loading: false, user: action.payload };

        case LOGIN_USER_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false, user: null };

        case LOGOUT_USER:
            return { ...state, loading: true };

        case LOGOUT_USER_SUCCESS:
            NotificationManager.success('User Logged Out');
            return { ...state, loading: false, user: null };

        case LOGOUT_USER_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        case SIGNUP_USER:
            return { ...state, loading: true };

        case SIGNUP_USER_SUCCESS:
            NotificationManager.success('Account Created');
            return { ...state, loading: false, user: action.payload };

        case SIGNUP_USER_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false, user: null };

        case VALIDATE_ID_TOKEN:
            return { ...state, loading: true }

        case VALIDATE_ID_TOKEN_SUCCESS:
            const {name, email, imgUrl, roll} = action.payload;
            if (state.roll !== roll) {
                state = { ...state, roll: roll }
            }
            return { ...state, loading: false, name: name, email: email, imgUrl: imgUrl }

        case VALIDATE_ID_TOKEN_FAILURE:
            return { ...state, loading: false, user: null };

        default: return { ...state };
    }
}
