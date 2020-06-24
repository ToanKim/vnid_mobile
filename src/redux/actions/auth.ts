import {
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from '../types';

export const signInSuccess = (user: any) => {
    return {type: SIGNIN_SUCCESS, user};
};

export const registerSuccess = (user: any) => {
    return {
        type: REGISTER_SUCCESS,
        user,
    };
};

export const registerError = () => {
    return {
        type: REGISTER_ERROR,
    };
};

export const signInError = () => {
    return {
        type: SIGNIN_ERROR,
        error: {
            message: 'fail to login',
        },
    };
};

export const signOutSuccess = () => {
    return {
        type: SIGNOUT_SUCCESS,
    };
};

export const signOutError = () => {
    return {
        type: SIGNOUT_ERROR,
    };
};
