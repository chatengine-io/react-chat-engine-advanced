import _ from 'lodash';
import axios from 'axios';

import {
  MessageObject,
  ChatAuthHeaders,
  UserAuthHeaders,
} from '../../interfaces';

type NewMessage = (
  host: string,
  headers: UserAuthHeaders | ChatAuthHeaders,
  chatId: number | undefined,
  message: MessageObject,
  callback: (message: MessageObject) => void
) => void;

export const newMessage: NewMessage = (
  host,
  headers,
  chatId,
  message,
  callback
) => {
  if (!chatId) return;

  const formdata = new FormData();
  if (message.attachments.length > 0) {
    for (let i = 0; i < message.attachments.length; i++) {
      formdata.append(
        'attachments',
        message.attachments[i].blob as Blob,
        message.attachments[i].file as string
      );
    }
  }
  message.text !== null && formdata.append('text', message.text);
  formdata.append('created', message.created);
  formdata.append('sender_username', message.sender_username);
  formdata.append('custom_json', JSON.stringify({}));

  axios
    .post(`${host}/chats/${chatId}/messages/`, formdata, { headers })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('New Message Error', error);
    });
};
