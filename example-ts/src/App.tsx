import React from 'react';

import {
  MyChatsSocket,
  ChatWindow,
  useUserHooks,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const App: React.FC = () => {
  const state = useUserHooks(projectId, myUsername, mySecret, true);
  return (
    <div>
      <MyChatsSocket {...state} />
      <ChatWindow timezoneOffset={1} {...state} />
    </div>
  );
};

export default App;
