import axios from 'axios';

import { ChatProps } from '../../interfaces';
import { UserAuthHeaders } from '../interfaces';

type RemovePerson = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number,
  username: string,
  callback: (chat: ChatProps) => void
) => void;

export const removePerson: RemovePerson = (
  host,
  headers,
  chatId,
  username,
  callback
) => {
  axios
    .put(`${host}/chats/${chatId}/people/`, { username }, { headers })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Remove Person Error', error);
    });
};
