import _ from 'lodash';
import axios from 'axios';

import { MessageProps } from '../../components/util/interfaces';

type NewMessage = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number | undefined,
  text: string,
  attachments: File[],
  callback: (message: MessageProps) => void
) => void;

export const newMessage: NewMessage = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  text,
  attachments,
  callback
) => {
  if (!chatId) return;

  const formdata = new FormData();
  formdata.append('text', text);
  if (attachments.length > 0) {
    for (let i = 0; i < attachments.length; i++) {
      formdata.append('attachments', attachments[i], attachments[i].name);
    }
  }

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
