import _ from 'lodash';
import axios from 'axios';

import { ChatProps } from '../../interfaces';

type NewChat = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  title: string | undefined,
  callback: (chat: ChatProps) => void
) => void;

export const newChat: NewChat = (
  host,
  projectId,
  myUsername,
  mySecret,
  title,
  callback
) => {
  if (!title) return;

  axios
    .post(
      `${host}/chats/`,
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
