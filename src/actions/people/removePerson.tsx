import axios from 'axios';

import { ChatProps } from '../../interfaces';

type RemovePerson = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  username: string,
  callback: (chat: ChatProps) => void
) => void;

export const removePerson: RemovePerson = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  username,
  callback
) => {
  axios
    .put(
      `http://127.0.0.1:8000/chats/${chatId}/people/`,
      { username },
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
      console.log('Remove Person Error', error);
    });
};
