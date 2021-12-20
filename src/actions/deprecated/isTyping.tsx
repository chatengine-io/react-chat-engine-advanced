import axios from 'axios';

import { getHeaders, getApiUrl, Auth } from './interfaces';

export const isTyping = (
  props: Auth,
  chatId: number,
  callback: (data: Object) => void
) => {
  axios
    .post(
      `${getApiUrl(props)}/chats/${chatId}/typing/`,
      {},
      { headers: getHeaders(props) }
    )

    .then((response) => {
      callback && callback(response.data);
    })

    .catch(() => {});
};
