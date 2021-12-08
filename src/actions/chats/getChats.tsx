import _ from 'lodash';
import axios from 'axios';

import { ChatProps } from '../../interfaces';

type GetChats = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatCount: number,
  callback: (chats: Array<ChatProps>) => void
) => void;

export const getChats: GetChats = (
  projectId,
  myUsername,
  mySecret,
  chatCount,
  callback
) => {
  axios
    .get(`http://127.0.0.1:8000/chats/latest/${chatCount}/`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })
    .then((response) => {
      // props.onGetChats && props.onGetChats(response.data);
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch Chats Error', error);
    });
};
