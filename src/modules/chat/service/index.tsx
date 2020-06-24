import React from 'react';
import {View} from 'react-native';
import {postWithPath, getWithPath} from 'src/utils/async';
import path from 'src/config/api';
import CarouselPlugin, {
    CarouselNSliderPlugin,
} from '../components/CarouselPlugin';
// import CircularSliderPlugin from '../components/CircularSliderPlugin';
// import DraggableListPlugin from '../components/DraggableListPlugin';
import ListResult from '../components/ListResults';
import SummaryPlugin from '../components/SummaryPlugin';
import {PLUGIN} from 'src/constants';
import {THREAD_MOCK, CHAT_MOCK} from './mock';
// account

export interface IComponentInput {
    pluginId: string;
    items: any[];
}
export interface IMsg {
    body: string;
    component?: IComponentInput;
}
export interface IMessage {
    messageId: string;
    senderId: string;
    msg: IMsg;
    timestamp?: number;
}

export interface IThread {
    threadId: string;
    nicknames: string;
    name: string;
    lastMessage: string;
    participantID: string;
    friendImageUrl: string;
}

export interface IThreadList {}

export interface SendParam {
    senderId: string;
    threadId: string;
    msg: IMsg;
}

const ChatService = {
    getThreads: () => {
        // return getWithPath(path.GET_THREAD_LIST, {});
        return Promise.resolve(THREAD_MOCK.data);
    },
    // getThreadById: (threadId: string) => {
    getThreadById: () => {
        return Promise.resolve(CHAT_MOCK.data);
        // return getWithPath(path.GET_THREAD_BY_ID, {threadId});
    },
    send: (body: any) => {
        return postWithPath(path.SEND_MESSAGE, {}, body);
    },
};

export default ChatService;

export const getPlugin: (
    item: any,
    index: number,
    onSend: (msg: any) => void,
) => Element = (item, index, onSend) => {
    // console.log({item});
    switch (item.id) {
        case PLUGIN.LIST_RESULT:
            return <ListResult key={index} data={item.data} onSend={onSend} />;
        // case PLUGIN.CIRCULAR_SLIDER:
        //     return (
        //         <CircularSliderPlugin key={'circular-slider'} onSend={onSend} />
        //     );
        case PLUGIN.CAROUSEL:
            return (
                <CarouselPlugin key={index} data={item.data} onSend={onSend} />
            );
        case PLUGIN.CAROUSEL_NS_SLIDER:
            return <CarouselNSliderPlugin key={index} onSend={onSend} />;
        case PLUGIN.DRAGGABLE_LIST:
            return (
                <CarouselPlugin key={index} data={item.data} onSend={onSend} />
                // <DraggableListPlugin
                //     key={index}
                //     data={item.data}
                //     onSend={onSend}
                // />
            );
        case PLUGIN.SUMMARY:
            return (
                <SummaryPlugin key={index} data={item.data} onSend={onSend} />
            );
        default:
            return <View />;
    }
};
