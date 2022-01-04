import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios';

import { Props } from './props';

import { ChildSocket } from './childSocket';

import { UserAuthHeaders } from '../../interfaces';

const getSessionToken = (
  host = 'https://api.chatengine.io',
  headers: UserAuthHeaders,
  callback: (token: string) => void,
  error: () => void
) => {
  axios
    .get(`${host}/users/me/session/`, { headers })
    .then((response) => callback(response.data.token))
    .catch(() => error());
};

export const UserSocket: React.FC<Props> = (props: Props) => {
  const didMountRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sessionToken, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const host = props.isDevelopment
        ? 'http://127.0.0.1:8000'
        : 'https://api.chatengine.io';
      const headers: UserAuthHeaders = {
        'Public-Key': props.projectId,
        'User-Name': props.myUsername,
        'User-Secret': props.mySecret,
      };

      getSessionToken(
        host,
        headers,
        (token) => setToken(token),
        () => {
          console.log(
            `Your login credentials were not correct: \n
              Project ID: ${props.projectId} \n
              Username: ${props.myUsername} \n
              Secret: ${props.mySecret}\n
              Double check these credentials to make sure they're correct.\n
              If all three are correct, try resetting the username and secret in the Online Dashboard or Private API.`
          );
          props.onAuthFail && props.onAuthFail();
        }
      );
    }
  }, []);

  function reRender() {
    setIsHidden(true);
    setTimeout(() => setIsHidden(false), 100);
  }

  if (isHidden && sessionToken) return <div />;

  return (
    <ChildSocket
      projectId={props.projectId}
      myUsername={props.myUsername}
      mySecret={props.mySecret}
      sessionToken={sessionToken}
      isDevelopment={props.isDevelopment}
      onRefresh={reRender}
      onConnect={props.onConnect}
      onError={props.onError}
      onClose={props.onClose}
      onNewChat={props.onNewChat}
      onEditChat={props.onEditChat}
      onDeleteChat={props.onDeleteChat}
      onNewMessage={props.onNewMessage}
      onEditMessage={props.onEditMessage}
      onDeleteMessage={props.onDeleteMessage}
      onIsTyping={props.onIsTyping}
    />
  );
};
