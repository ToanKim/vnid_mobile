import {postWithPath} from 'src/utils/async';
import path from 'src/config/api';
// import {authorize, AuthConfiguration} from 'react-native-app-auth';
// account
export interface IUser {
    sub: null | string;
    token: null | string;
    username: null | string;
    interest_topics?: null | string[];
    email: null | string;
    phone: null | string;
    date_of_birth: null | string;
    address: null | string;
    account_type: null | string;
    avatar: string;
}

export default {
    signIn: (email: string, password: string) => {
        return postWithPath(path.AUTH_LOGIN, {}, {email, password});
    },
    signOut: () => {
        return Promise.resolve();
    },
};
