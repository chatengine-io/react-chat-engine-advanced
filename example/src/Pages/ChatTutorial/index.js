import React from 'react';

import { UserSocket, ChatEngine, useUserHooks } from 'react-chat-engine';

// import './App.css';

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack'];
const userName = userNames[Math.floor(Math.random() * userNames.length)];
const projectId = '52147d0e-0f43-4ea7-916f-1820a16bf1d7';
const userSecret = 'pass1234';

const App = () => {
  const state = useUserHooks(projectId, userName, userSecret);

  return (
    <div>
      <UserSocket {...state} />

      <ChatEngine
        {...state}
        renderChatFeed={() => <div>yo</div>}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default App;
