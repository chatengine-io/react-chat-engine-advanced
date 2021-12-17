import _ from 'lodash';
import axios from 'axios';

import { ChatProps } from '../../interfaces';

type GetChatsBefore = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  before: string,
  chatCount: number,
  callback: (chats: Array<ChatProps>) => void
) => void;

export const getChatsBefore: GetChatsBefore = (
  host,
  projectId,
  myUsername,
  mySecret,
  before,
  chatCount,
  callback
) => {
  axios
    .put(
      `${host}/chats/latest/${chatCount}/`,
      { before },
      {
        headers: {
          'Public-Key': projectId,
          'User-Name': myUsername,
          'User-Secret': mySecret,
        },
      }
    )
    .then((response) => {
      // props.onGetChats && props.onGetChats(response.data);
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch Chats Before Error', error);
    });
};
