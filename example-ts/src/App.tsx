import React from 'react';

import {
  UserSocket,
  ChatEngine,
  useChatEngineUserHooks,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const App: React.FC = () => {
  const {
    socketHooks,
    chatData,
    chatState,
    chatHooks,
  } = useChatEngineUserHooks(projectId, myUsername, mySecret, true);
  return (
    <div>
      <UserSocket
        projectId={projectId}
        myUsername={myUsername}
        mySecret={mySecret}
        isDevelopment={true}
        {...socketHooks}
      />
      <ChatEngine
        myUsername={myUsername}
        timezoneOffset={1}
        {...chatData}
        {...chatState}
        {...chatHooks}
      />
    </div>
  );
};

export default App;
