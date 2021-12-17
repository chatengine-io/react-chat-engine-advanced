import axios from 'axios';

import { PersonProps } from '../../interfaces';

type GetPeopleToInvite = (
  host: string,
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  callback: (peopleToInvite: PersonProps[]) => void
) => void;

export const getPeopleToInvite: GetPeopleToInvite = (
  host,
  projectId,
  myUsername,
  mySecret,
  chatId,
  callback
) => {
  axios
    .get(`${host}/chats/${chatId}/others/`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })

    .then((response) => {
      // props.onGetOtherPeople && props.onGetOtherPeople(chatId, response.data)
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch People to Invite Error', error);
    });
};
