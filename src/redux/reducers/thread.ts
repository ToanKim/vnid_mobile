import {
    ADD_THREAD_LIST,
    CHANGE_CURRENT_THREAD,
    ADD_MESSAGE,
    CLEAR_MESSAGE,
} from '../types';

const defaultState: any = {
    list: [],
    currentThread: {},
    currentMessage: [],
};

export default function chatReducer(state = defaultState, action: any) {
    // console.log('[LOG] action to chw ', action.payload);
    switch (action.type) {
        case ADD_THREAD_LIST:
            return {
                ...state,
                list: action.payload,
            };
        case CHANGE_CURRENT_THREAD:
            return {
                ...state,
                currentThread: action.payload,
                currentMessage: action.payload.messages,
            };
        case ADD_MESSAGE:
            return {
                ...state,
                currentMessage: [...state.currentMessage, action.payload],
            };
        case CLEAR_MESSAGE:
            return defaultState;
        default:
            return state;
    }
}
