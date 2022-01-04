import axios from 'axios';

import { PersonObject, UserAuthHeaders } from '../../interfaces';

type GetPeopleToInvite = (
  host: string,
  headers: UserAuthHeaders,
  chatId: number,
  callback: (peopleToInvite: PersonObject[]) => void
) => void;

export const getPeopleToInvite: GetPeopleToInvite = (
  host,
  headers,
  chatId,
  callback
) => {
  axios
    .get(`${host}/chats/${chatId}/others/`, { headers })

    .then((response) => {
      // props.onGetOtherPeople && props.onGetOtherPeople(chatId, response.data)
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch People to Invite Error', error);
    });
};
