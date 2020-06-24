import * as type from '../types';

const defaultState: any = {
    isAuth: false,
    sub: null,
    token: null,
    username: null,
    interest_topics: null,
    email: null,
    phone: null,
    date_of_birth: null,
    address: null,
    account_type: null,
    avatar: null,
};

export default function authReducer(state = defaultState, action: any): any {
    switch (action.type) {
        case type.SIGNIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                ...action.user,
            };
        case type.SIGNIN_ERROR:
            return {
                isAuth: false,
            };
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                ...action.user,
            };
        case type.REGISTER_ERROR:
            return {
                ...defaultState,
            };
        case type.SIGNOUT_SUCCESS:
            return {
                ...defaultState,
            };
        case type.SIGNOUT_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    }
}
