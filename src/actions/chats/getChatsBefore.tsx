import _ from 'lodash';
import axios from 'axios';

import { ChatObject, UserAuthHeaders } from '../../interfaces';

type GetChatsBefore = (
  host: string,
  headers: UserAuthHeaders,
  before: string,
  chatCount: number,
  callback: (chats: Array<ChatObject>) => void
) => void;

export const getChatsBefore: GetChatsBefore = (
  host,
  headers,
  before,
  chatCount,
  callback
) => {
  axios
    .put(`${host}/chats/latest/${chatCount}/`, { before }, { headers })
    .then((response) => {
      // props.onGetChats && props.onGetChats(response.data);
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch Chats Before Error', error);
    });
};
