import {getWithPath} from 'src/utils/async';
import path from 'src/config/api';
import mock from './mock.js';
// account

const HomeService = {
    getHome: (param?: any): Promise<any> => {
        // return getWithPath(path.GET_HOME, {});
        return Promise.resolve(mock.data);
    },
};

export default HomeService;
