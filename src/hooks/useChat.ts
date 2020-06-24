import {useState, useCallback, useEffect} from 'react';
import ChatService, {IMsg, SendParam} from 'src/modules/chat/service';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage, changeCurrentThread} from 'src/redux/actions/chat';
import {normalizeSubmit} from 'src/utils/normalize';

const useChat = (threadId: string = '11111') => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {sub} = useSelector((state: any) => state.authReducers);
    const {currentThread, currentMessage = []} = useSelector(
        (state: any) => state.threadReducers,
    );

    useEffect(() => {
        (async () => {
            const res = await ChatService.getThreadById(threadId);
            dispatch(changeCurrentThread(res));
        })();
    }, [dispatch, threadId]);

    const send = useCallback(
        async (msg: IMsg, isUnmount: boolean = false) => {
            if (msg.body === '') {
                return;
            }
            const currTime = Date.now();
            const formatBody: SendParam = {
                threadId: currentThread.threadId,
                senderId: sub,
                msg,
            };
            setLoading(true);
            try {
                if (!isUnmount) {
                    dispatch(
                        addMessage({
                            ...formatBody,
                            messageId: currTime.toString(),
                        }),
                    );
                }
                const res: [] = await ChatService.send(
                    normalizeSubmit(formatBody),
                );

                console.log({isUnmount});

                if (!isUnmount) {
                    res.forEach((item: any, index) =>
                        setTimeout(
                            () =>
                                dispatch(
                                    addMessage({
                                        ...item,
                                        messageId:
                                            currTime.toString() +
                                            index.toString(),
                                    }),
                                ),
                            2000 * index,
                        ),
                    );
                }
            } catch (e) {
            } finally {
                if (!isUnmount) {
                    setLoading(false);
                }
            }
        },
        [currentThread, sub, dispatch],
    );
    return {currentMessage, loading, send};
};

export default useChat;
