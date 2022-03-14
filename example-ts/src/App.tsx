import React from 'react';

import {
  MultiChatSocket,
  ChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const username = 'Adam_La_Morre';
const secret = 'pass1234';

const App: React.FC = () => {
  const chatProps = useMultiChatLogic(projectId, username, secret, true);

  return (
    <>
      <MultiChatSocket {...chatProps} />
      <ChatWindow timezoneOffset={1} {...chatProps} />
    </>
  );
};

export default App;
