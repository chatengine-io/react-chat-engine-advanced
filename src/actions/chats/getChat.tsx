import axios from 'axios';

import { ChatObject, ChatAuthHeaders, UserAuthHeaders } from '../../interfaces';

type GetChat = (
  host: string,
  headers: UserAuthHeaders | ChatAuthHeaders,
  chatId: number | string,
  callback: (chat: ChatObject) => void
) => void;

export const getChat: GetChat = (host, headers, chatId, callback) => {
  axios
    .get(`${host}/chats/${chatId}/`, {
      headers,
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Get Chat Error', error);
    });
};
