import React from 'react';

import { Props } from './props';

// import { WebSocket } from 'nextjs-websocket';

export const ChildSocket: React.FC<Props> = (props: Props) => {
  const { sessionToken } = props;

  if (!sessionToken) return <div />;

  return <div />;
  //   return (
  //     <WebSocket
  //       url={`http://127.0.0.1:8000/person_v4/?session_token=${sessionToken}`}
  //       reconnect={true}
  //       reconnectIntervalInMilliSeconds={3000}
  //       onOpen={() => console.log('open')}
  //     />
  //   );
};
