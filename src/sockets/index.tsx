import React, { useEffect, useState, useRef } from 'react';

import { Props } from './props';

import { ChildSocket } from './childSocket';

import axios from 'axios';

const getSessionToken = (
  projectId = '',
  myUsername = '',
  mySecret = '',
  callback: (token: string) => void
) => {
  axios
    .get(`http://127.0.0.1:8000/users/me/session/`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })
    .then((response) => {
      callback(response.data.token);
    })
    .catch((error) => {
      console.log('Get Session Error', error);
    });
};

export const Socket: React.FC<Props> = (props: Props) => {
  const didMountRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sessionToken, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      getSessionToken(
        props.projectId,
        props.myUsername,
        props.mySecret,
        (token) => setToken(token)
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
