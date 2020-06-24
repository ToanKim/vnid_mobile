import {IMessage} from '../service';
import {CHATBOT_ID} from 'src/constants';

export const normalizeChatResp = (resp: any): object => {
    const timestamp = Date.now();
    if (resp.custom) {
        return resp.map((item: any) => ({
            ...item.custom,
            timestamp: timestamp,
            messageId: timestamp,
            senderId: CHATBOT_ID,
        }));
    }
    return resp.map((item: any) => ({
        messageId: timestamp,
        threadId: 12345,
        senderId: CHATBOT_ID,
        msg: {
            body: item.text,
        },
        timestamp: timestamp,
    }));
};

export const normalizeResp = (resp: any): object => {
    let data = Array.isArray(resp) ? [...resp] : {...resp};
    if (data[0].recipient_id) {
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
