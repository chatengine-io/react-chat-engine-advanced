import axios from 'axios';

import { ChatProps } from '../../interfaces';
import { UserAuthHeaders } from '../interfaces';

type InvitePerson = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number,
  username: string,
  callback: (chat: ChatProps) => void
) => void;

export const invitePerson: InvitePerson = (
  host,
  headers,
  chatId,
  username,
  callback
) => {
  axios
    .post(`${host}/chats/${chatId}/people/`, { username }, { headers })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Invite Person Error', error);
    });
};
