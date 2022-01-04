import axios from 'axios';

import { ChatObject, UserAuthHeaders } from '../../interfaces';

type DeleteChat = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number | string,
  callback: (chat: ChatObject) => void
) => void;

export const deleteChat: DeleteChat = (host, headers, chatId, callback) => {
  axios
    .delete(`${host}/chats/${chatId}/`, {
      headers,
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Delete Chat Error', error);
    });
};
