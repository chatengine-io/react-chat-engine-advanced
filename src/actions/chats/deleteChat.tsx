import axios from 'axios';

import { ChatProps } from '../../interfaces';

type DeleteChat = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  callback: (chat: ChatProps) => void
) => void;

export const deleteChat: DeleteChat = (
  host,
  projectId,
  myUsername,
  mySecret,
  chatId,
  callback
) => {
  axios
    .delete(`${host}/chats/${chatId}/`, {
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
      console.log('Delete Chat Error', error);
    });
};
