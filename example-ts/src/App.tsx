import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const projectId = '05563c5e-ccbb-41fd-bb1f-bbf5cdd83272';
const username = 'adam@lamorre.co';
const secret = 'Pass1234!';

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
