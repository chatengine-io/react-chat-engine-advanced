import _ from 'lodash';
import axios from 'axios';

import { MessageProps } from '../../interfaces';

type NewMessage = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number | undefined,
  message: MessageProps,
  callback: (message: MessageProps) => void
) => void;

export const newMessage: NewMessage = (
  projectId,
  myUsername,
  mySecret,
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
    .post(`http://127.0.0.1:8000/chats/${chatId}/messages/`, formdata, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('New Message Error', error);
    });
};
