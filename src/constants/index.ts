import {AuthConfiguration} from 'react-native-app-auth';

export const authConfig: AuthConfiguration = {
    issuer: 'https://test.gogo-vnid.xyz/identity',
    clientId: 'react-native',
    redirectUrl: 'xyz.gogo-vnid:/oauthredirect',
    scopes: ['openid', 'profile', 'chatbot', 'offline_access'],
    dangerouslyAllowInsecureHttpRequests: true,
};

export enum PLUGIN {
    LIST_RESULT = 1,
    CIRCULAR_SLIDER = 2,
    SUMMARY = 0,
    CAROUSEL_NS_SLIDER = 4,
    DRAGGABLE_LIST = 5,
    CAROUSEL = 6,
}

export const CHATBOT_ID = 'chat-bot';
