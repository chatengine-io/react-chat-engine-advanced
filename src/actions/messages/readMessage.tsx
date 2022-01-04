import axios from 'axios';
import { ChatObject, UserAuthHeaders } from '../../interfaces';

type ReadMessages = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number,
  messageCount: number,
  callback: (chat: ChatObject) => void
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
