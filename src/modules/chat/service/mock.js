export const THREAD_MOCK = {
    err: 0,
    msg: 'Success',
    data: [
        {
            threadId: 12345,
            nicknames: 'Study Bot',
            nameThread: 'Chat',
            lastMessage: 'Hello there',
            participantID: 11111,
            friendImageUrl:
                'https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.0-1/p120x120/44815404_1778243002301162_361984851638747136_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=_53AwDUgky4AX9iaXJj&_nc_ht=scontent.fsgn6-1.fna&_nc_tp=6&oh=10fad51481e0ab1db46d1944e5e46a7a&oe=5EAA9D48',
        },
    ],
    timestamp: 1553605391068,
};

export const CHAT_MOCK = {
    err: 0,
    msg: 'Success',
    data: {
        threadId: 12345,
        participantId: 11111,
        messages: [
            {
                messageId: '123123',
                msg: {
                    body: 'Hello there',
                },
                timestamp: 1553605391068,
            },
        ],
    },
    timestamp: 1553605391068,
};
