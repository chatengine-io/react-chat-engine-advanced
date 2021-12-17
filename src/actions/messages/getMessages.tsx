import { MessageProps } from '../../interfaces';

import axios from 'axios';

type GetMessages = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  messageCount: number,
  callback: (chatId: number, messages: MessageProps[]) => void
) => void;

export const getMessages: GetMessages = (
  host,
  projectId,
  myUsername,
  mySecret,
  chatId,
  messageCount,
  callback
) => {
  axios
    .get(`${host}/chats/${chatId}/messages/latest/${messageCount}/`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })
    .then((response) => {
      // props.onGetMessages && props.onGetMessages(chatId, response.data)
      callback(chatId, response.data);
    })
    .catch((error) => {
      console.log('Fetch Latest Messages Error', error);
    });
};
