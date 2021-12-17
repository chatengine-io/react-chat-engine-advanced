import axios from 'axios';
import { ChatProps } from '../..';

type ReadMessages = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  messageCount: number,
  callback: (chat: ChatProps) => void
) => void;

export const readMessage: ReadMessages = (
  host,
  projectId,
  myUsername,
  mySecret,
  chatId,
  messageId,
  callback
) => {
  axios
    .patch(
      `${host}/chats/${chatId}/people/`,
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
