import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

// import './App.css';

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack'];
const userName = userNames[Math.floor(Math.random() * userNames.length)];
const projectId = '52147d0e-0f43-4ea7-916f-1820a16bf1d7';
const userSecret = 'pass1234';

const App = () => {
  const state = useMultiChatLogic(projectId, userName, userSecret);

  return (
    <div>
      <MultiChatSocket {...state} />

      <MultiChatWindow
        {...state}
        renderChatFeed={() => <div>yo</div>}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default App;
