import axios from 'axios';

import { PersonProps } from '../../interfaces';

type GetPeopleToInvite = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  callback: (peopleToInvite: PersonProps[]) => void
) => void;

export const getPeopleToInvite: GetPeopleToInvite = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  callback
) => {
  axios
    .get(`http://127.0.0.1:8000/chats/${chatId}/others/`, {
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
