import _ from 'lodash';
import axios from 'axios';

import { ChatProps } from '../../interfaces';

type NewChat = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  title: string | undefined,
  callback: (chat: ChatProps) => void
) => void;

export const newChat: NewChat = (
  projectId,
  myUsername,
  mySecret,
  title,
  callback
) => {
  if (!title) return;

  axios
    .post(
      `http://127.0.0.1:8000/chats/`,
      { title },
      {
        headers: {
          'Public-Key': projectId,
          'User-Name': myUsername,
          'User-Secret': mySecret,
        },
      }
    )

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('New Chat Error', error);
    });
};
