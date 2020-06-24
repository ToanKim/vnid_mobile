import {IMessage} from 'src/modules/chat/service';
import {CHATBOT_ID} from 'src/constants';
import _ from 'lodash';

const resultResp = [
    {
        id: 'wid02idđ1e12e210122d=-212e',
        type: 'package',
        name: 'Oversea Studying in Cambridge',
        description:
            ' Etiam feugiat condimentum lacus, eu pulvinar neque porta eget. Quisque bibendum nibh ut orci malesuada, et ultrices nulla lacinia. Proin ut nunc fringilla, venenatis dolor ac, aliquet nulla',
        image_URL: 'https://megastudy.edu.vn/upload/tinymce/1516.jpg',
        provider: 'Sunrise Agency',
    },
    {
        id: 'wid02id0122d=-212e',
        type: 'package',
        name: 'Oversea Study in London University',
        description:
            ' Etiam feugiat condimentum lacus, eu pulvinar neque porta eget. Quisque bibendum nibh ut orci malesuada, et ultrices nulla lacinia. Proin ut nunc fringilla, venenatis dolor ac, aliquet nulla',
        image_URL: 'https://megastudy.edu.vn/upload/tinymce/1516.jpg',
        provider: 'Sunrise Agency',
    },
    {
        id: 'wid012312d12d122d=-212e',
        type: 'package',
        name: 'Oversea Study in Canada',
        description:
            ' Etiam feugiat condimentum lacus, eu pulvinar neque porta eget. Quisque bibendum nibh ut orci malesuada, et ultrices nulla lacinia. Proin ut nunc fringilla, venenatis dolor ac, aliquet nulla',
        image_URL: 'https://megastudy.edu.vn/upload/tinymce/1516.jpg',
        provider: 'Sunrise Agency',
    },
    {
        id: 'wid02ie12e210122d=-212e',
        type: 'package',
        name: 'Oversea Study in USA',
        description:
            ' Etiam feugiat condimentum lacus, eu pulvinar neque porta eget. Quisque bibendum nibh ut orci malesuada, et ultrices nulla lacinia. Proin ut nunc fringilla, venenatis dolor ac, aliquet nulla',
        image_URL: 'https://megastudy.edu.vn/upload/tinymce/1516.jpg',
        provider: 'Sunrise Agency',
    },
];

export const normalizeChatResp = (resp: any): object => {

    return resp.map((item: any) => {
        let res = {};
        if (item.text === 'Goodbye, hope that can help you') {
            res = {
                ...item.custom,
                msg: {
                    body: 'Here are some most suitable study abroad',
                    component: {
                        id: 1,
                        data: resultResp,
                    },
                },
                timestamp: Date.now(),
                messageId: Date.now(),
                senderId: CHATBOT_ID,
            };
        } else if (item.custom) {
            if (item.custom.msg.body.includes('GPA')) {
                res = {
                    ...item.custom,
                    msg: {
                        body: item.custom.msg.body,
                    },
                    timestamp: Date.now(),
                    messageId: Date.now(),
                    senderId: CHATBOT_ID,
                };
            } else {
                res = {
                    ...item.custom,
                    msg: {
                        ...item.custom.msg,
                        component: {
                            ...item.custom.msg.component,
                        },
                    },
                    timestamp: Date.now(),
                    messageId: Date.now(),
                    senderId: CHATBOT_ID,
                };
            }
        } else {
            res = {
                messageId: Date.now(),
                threadId: 12345,
                senderId: CHATBOT_ID,
                msg: {
                    body: item.text,
                },
                timestamp: Date.now(),
            };
        }

        return res;
    });
};

export const normalizeResp = (respArg: any): object => {
    const resp = respArg?.data;
    
    let data = Array.isArray(resp) ? [...resp] : {...resp};
    if (Array.isArray(resp)) {
        data = normalizeChatResp(data);
    }
    return {
        err: 200,
        msg: '',
        data,
    };
};

export const normalizeSubmit = (resp: IMessage) => {
    return {
        sender: resp.senderId,
        message: resp.msg.body,
    };
};

/*
 {
  "user": {
    "id": "ef59f836-5548-4eef-b20f-03d30689bcd8",
    "email": "dung@gmail.com",
    "isActive": true,
    "createdAt": "2020-03-07T02:37:11.872Z",
    "updatedAt": "2020-03-07T05:42:35.779Z"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1bmdAZ21haWwuY29tIiwic3ViIjoiZWY1OWY4MzYtNTU0OC00ZWVmLWIyMGYtMDNkMzA2ODliY2Q4IiwiaWF0IjoxNTg2MjQ3NDA2LCJleHAiOjE1ODY4NTIyMDZ9.joDRZerk929kb0J4cughtc-nxQz0hgXN5cADXGuvSsY"
}
*/
