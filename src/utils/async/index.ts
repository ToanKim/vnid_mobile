import {AsyncStorage} from 'react-native';
import {normalizeResp} from '../normalize';
export const fetchFn = async (
    method: string,
    path: string,
    param: object,
    body: object,
    options: object = {},
) => {
    const token = await AsyncStorage.getItem('accessToken');

    const content = {
        method: method || 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `bearer ${token}`,
        },
        ...options,
    };
    if (body) {
        content.body = JSON.stringify(body);
    }
    return fetch(path, content)
        .then(toJSON)
        .then(resp => {
            return normalizeResp(resp);
        })
        .then(validateRes);
};

export const postWithPath = (
    path: string,
    param: object,
    data: object,
    options: object = {},
) => {
    return fetchFn('POST', path, param, data, options);
};

export const getWithPath = (
    path: string,
    param: object,
    options: object = {},
) => {
    return fetchFn('GET', path, param, null, options);
};

const toJSON = (resp: any) => {
    return resp.json();
    // if (resp.ok) {
    //     return resp.json();
    // }
    // return Promise.reject();
};

const validateRes = (resp: any) => {
    if (!resp || resp.err < 0) {
        return Promise.reject(resp);
    }
    return Promise.resolve(resp.data);
};
