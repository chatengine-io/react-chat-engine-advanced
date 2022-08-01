import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios';

import { Props } from './props';

import { ChildSocket } from './childSocket';

import { UserAuthHeaders } from '../../interfaces';

const getSessionToken = (
  host: string,
  headers: UserAuthHeaders,
  callback: (token: string) => void,
  error: () => void
) => {
  axios
    .get(`${host}/users/me/session/`, { headers })
    .then((response) => callback(response.data.token))
    .catch(() => error());
};

export const MultiChatSocket: React.FC<Props> = (props: Props) => {
  const didMountRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sessionToken, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const host = props.httpUrl ? props.httpUrl : 'https://api.chatengine.io';
      const headers: UserAuthHeaders = {
        'Public-Key': props.projectId,
        'User-Name': props.username,
        'User-Secret': props.secret,
      };

      getSessionToken(
        host,
        headers,
        (token) => setToken(token),
        () => {
          console.log(
            `Your login credentials were not correct: \n
              Project ID: ${props.projectId} \n
              Username: ${props.username} \n
              Secret: ${props.secret}\n
              Double check these credentials to make sure they're correct.\n
              If all three are correct, try resetting the username and secret in the Online Dashboard or Private API.`
          );
          props.onAuthFail && props.onAuthFail();
        }
      );
    }
  }, []);

  async function reRender() {
    setIsHidden(true);
    setTimeout(() => setIsHidden(false), 100);
  }

  if (isHidden && sessionToken) return <div />;

  return (
    <ChildSocket
      projectId={props.projectId}
      username={props.username}
      secret={props.secret}
      sessionToken={sessionToken}
      wsUrl={props.wsUrl}
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
