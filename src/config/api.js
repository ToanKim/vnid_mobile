// const url = 'http://192.168.0.15:8081/public/';
// const url = 'https://vnid.duckdns.org/';
const url = 'https://test.gogo-vnid.xyz/';
const api_url = url + 'api/';

export default {
    // AUTH_LOGIN: api_url + 'auth.json',
    AUTH_LOGIN: api_url + 'auth/login',
    AUTH_GOOGLE: api_url + 'auth/google',
    AUTH_SIGNUP: api_url + 'users/create',
    USER_VERIFICATION: api_url + 'users/verification/send',

    GET_PROVIDERS: api_url + 'providers',
    GET_PROVIDER: api_url + 'providers/{id}',
    GET_SERVICES_BY_PROVIDER: api_url + 'providers/{id}/services',
    GET_SERVICE_BY_PROVIDER: api_url + 'providers/{id}/services/{sid}',

    SEARCH: 'http://127.0.0.1:8081/public/api/search.json',
    GET_PACKAGE_DETAIL: 'http://127.0.0.1:8081/public/api/package_detail.json',
    GET_PACKAGE: 'http://127.0.0.1:8081/public/api/packages.json',
    GET_RESULT: 'http://127.0.0.1:8081/public/api/results.json',
    GET_HOME: api_url + 'home',

    GET_THREAD_LIST: 'http://127.0.0.1:8081/public/api/threadList.json',
    GET_THREAD_BY_ID: 'http://127.0.0.1:8081/public/api/thread.json',
    // SEND_MESSAGE: api_url + 'send.json',
    SEND_MESSAGE: api_url + 'chatbot/send',
};
