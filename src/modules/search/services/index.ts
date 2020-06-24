import {getWithPath} from 'src/utils/async';
import path from 'src/config/api';
import mock from './mock';
// account

export default {
    search: (key: string): Promise<any> => {
        // return getWithPath(path.SEARCH, {key});
        return Promise.resolve(mock.data);
    },
};
