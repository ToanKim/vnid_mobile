import {getWithPath} from 'src/utils/async';
import path from 'src/config/api';
import {mock} from './mock.js';
// account

export default {
    getDetail: (type: string, id: number) => {
        // return getWithPath(path.GET_PACKAGE_DETAIL, {id});
        return Promise.resolve(mock.data);
    },
};
