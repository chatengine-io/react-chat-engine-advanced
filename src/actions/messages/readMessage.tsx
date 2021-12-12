import axios from 'axios';
import { ChatProps } from '../..';

type ReadMessages = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  messageCount: number,
  callback: (chat: ChatProps) => void
) => void;

export const readMessage: ReadMessages = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  messageId,
  callback
) => {
  axios
    .patch(
      `http://127.0.0.1:8000/chats/${chatId}/people/`,
      { last_read: messageId },
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
      console.log('Read Message Error', error);
    });
};
