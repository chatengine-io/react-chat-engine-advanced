import axios from 'axios';
import { ChatProps } from '../../interfaces';
import { UserAuthHeaders } from '../interfaces';

type ReadMessages = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number,
  messageCount: number,
  callback: (chat: ChatProps) => void
) => void;

export const readMessage: ReadMessages = (
  host,
  headers,
  chatId,
  messageId,
  callback
) => {
  axios
    .patch(
      `${host}/chats/${chatId}/people/`,
      { last_read: messageId },
      { headers }
    )

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Read Message Error', error);
    });
};
