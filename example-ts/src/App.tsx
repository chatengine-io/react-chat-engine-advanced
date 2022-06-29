import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const username = 'Adam_La_Morre';
const secret = 'pass1234';

const App: React.FC = () => {
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        timezoneOffset={1}
        {...chatProps}
        renderChatForm={(props: any) => <></>}
        style={{ height: '100vh' }}
      />
    </>
  );
};

export default App;
