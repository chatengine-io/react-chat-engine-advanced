import axios from 'axios';
import { MessageProps } from '../..';

import { getHeaders, getApiUrl, Auth } from './interfaces';

type NewMessage = {
  attachments?: File[];
  files?: File[];
  created?: string;
  custom_json?: object;
  text: string;
  sender_username: string;
};

export const sendMessage = (
  props: Auth,
  chatId: number | string,
  data: NewMessage,
  callback: (message: MessageProps) => void
) => {
  let formdata = new FormData();

  if (data.attachments) {
    for (let i = 0; i < data.attachments.length; i++) {
      formdata.append(
        'attachments',
        data.attachments[i],
        data.attachments[i].name
      );
    }
  } else if (data.files) {
    for (let i = 0; i < data.files.length; i++) {
      formdata.append('attachments', data.files[i], data.files[i].name);
    }
  }

  if (data.created) {
    formdata.append('created', data.created);
  }

  formdata.append('text', data.text);
  formdata.append('sender_username', data.sender_username);
  formdata.append(
    'custom_json',
    JSON.stringify(data.custom_json ? data.custom_json : {})
  );

  axios
    .post(`${getApiUrl(props)}/chats/${chatId}/messages/`, formdata, {
      headers: getHeaders(props),
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Send Messages Error', error);
    });
};
