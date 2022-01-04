import {
  MessageObject,
  UserAuthHeaders,
  ChatAuthHeaders,
} from '../../interfaces';

import axios from 'axios';

type GetMessages = (
  host: string,
  headers: UserAuthHeaders | ChatAuthHeaders,
  chatId: number,
  messageCount: number,
  callback: (chatId: number, messages: MessageObject[]) => void
) => void;

export const getMessages: GetMessages = (
  host,
  headers,
  chatId,
  messageCount,
  callback
) => {
  axios
    .get(`${host}/chats/${chatId}/messages/latest/${messageCount}/`, {
      headers,
    })
    .then((response) => {
      // props.onGetMessages && props.onGetMessages(chatId, response.data)
      callback(chatId, response.data);
    })
    .catch((error) => {
      console.log('Fetch Latest Messages Error', error);
    });
};
