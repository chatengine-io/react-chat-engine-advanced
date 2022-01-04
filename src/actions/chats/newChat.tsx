import _ from 'lodash';
import axios from 'axios';

import { ChatObject, UserAuthHeaders } from '../../interfaces';

type NewChat = (
  host: string,
  headers: UserAuthHeaders,
  title: string | undefined,
  callback: (chat: ChatObject) => void
) => void;

export const newChat: NewChat = (host, headers, title, callback) => {
  if (!title) return;

  axios
    .post(`${host}/chats/`, { title }, { headers })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('New Chat Error', error);
    });
};
