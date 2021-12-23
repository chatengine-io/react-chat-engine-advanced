import axios, { AxiosRequestHeaders } from 'axios';
import { ChatProps } from '../../interfaces';
import { Headers } from './interfaces';

interface NewChat {
  is_direct_chat?: boolean;
  usernames: string[];
}

export const getOrCreateChat = (
  host: string = 'https://api.chatengine.io',
  headers: Headers,
  data: NewChat,
  callback: (chat: ChatProps) => void
) => {
  axios
    .put(`${host}/chats/`, data, {
      headers: (headers as Object) as AxiosRequestHeaders,
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Get or Create Chat Error', error);
    });
};
