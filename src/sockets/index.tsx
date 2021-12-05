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
      console.log('Get or Create Session Error', error);
    });
};

export const Socket: React.FC<Props> = (props: Props) => {
  const { projectId, myUsername, mySecret } = props;

  const didMountRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [sessionToken, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      getSessionToken(projectId, myUsername, mySecret, (token) =>
        setToken(token)
      );
    }
  }, []);

  function reRender() {
    setIsHidden(true);
    console.log('Refreshing');

    setTimeout(() => {
      setIsHidden(false);
      console.log('Refresh completed');
    }, 100);
  }

  if (isHidden && sessionToken) return <div />;

  return (
    <ChildSocket
      projectId={projectId}
      myUsername={myUsername}
      mySecret={mySecret}
      sessionToken={sessionToken}
      onRefresh={reRender}
    />
  );
};
