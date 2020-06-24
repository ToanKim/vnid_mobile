// import {state, typeActions, api_url} from '../../constants';
import {
    INSERT_MESSAGE,
    CLEAR_MESSAGE,
    ADD_THREAD_LIST,
    CHANGE_CURRENT_THREAD,
    ADD_MESSAGE,
} from '../types';
import {IMessage, IThread} from 'src/modules/chat/service';

// import {fetchAPI} from '../../utils/fetch';

export const addThreadList = (threads: IThread[]) => {
    return {
        type: ADD_THREAD_LIST,
        payload: threads,
    };
};

export const changeCurrentThread = (currThread: IThread) => {
    return {
        type: CHANGE_CURRENT_THREAD,
        payload: currThread,
    };
};

export const addMessage = (message: IMessage) => {
    return {
        type: ADD_MESSAGE,
        payload: message,
    };
};

export function insertMessage(
    sub: string,
    createdTime: number,
    text: string | [],
    status: boolean,
    plugin?: any,
) {
    const payload = [
        {
            plugin,
            status,
            text,
            sub,
            createdTime,
        },
    ];
    return {
        type: INSERT_MESSAGE,
        payload,
    };
}

export function syncMessage() {
    // TODO
}

export function clearMessage() {
    return {
        type: CLEAR_MESSAGE,
    };
}
