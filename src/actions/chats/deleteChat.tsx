import axios from 'axios';

import { ChatProps } from '../../interfaces';

type DeleteChat = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  callback: (chat: ChatProps) => void
) => void;

export const deleteChat: DeleteChat = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  callback
) => {
  axios
    .delete(`http://127.0.0.1:8000/chats/${chatId}/`, {
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
