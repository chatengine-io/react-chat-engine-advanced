import axios from 'axios';
import { ChatProps } from '../../interfaces';
import { Auth, getApiUrl, getHeaders } from './interfaces';

interface NewChat {
  is_direct_chat?: boolean;
  usernames: string[];
}

export const getOrCreateChat = (
  props: Auth,
  data: NewChat,
  callback: (chat: ChatProps) => void
) => {
  axios
    .put(`${getApiUrl(props)}/chats/`, data, {
      headers: getHeaders(props),
    })

    .then((response) => {
      callback && callback(response.data);
    })

    .catch((error) => {
      console.log('Get or Create Chat Error', error);
    });
};
