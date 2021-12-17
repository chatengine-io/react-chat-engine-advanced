import axios from 'axios';

import { ChatProps } from '../../interfaces';

type RemovePerson = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  username: string,
  callback: (chat: ChatProps) => void
) => void;

export const removePerson: RemovePerson = (
  host,
  projectId,
  myUsername,
  mySecret,
  chatId,
  username,
  callback
) => {
  axios
    .put(
      `${host}/chats/${chatId}/people/`,
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
