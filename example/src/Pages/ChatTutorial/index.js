import React from 'react';

import { MyChatsSocket, ChatWindow, useMyChatsLogic } from 'react-chat-engine';

// import './App.css';

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack'];
const userName = userNames[Math.floor(Math.random() * userNames.length)];
const projectId = '52147d0e-0f43-4ea7-916f-1820a16bf1d7';
const userSecret = 'pass1234';

const App = () => {
  const state = useMyChatsLogic(projectId, userName, userSecret);

  return (
    <div>
      <MyChatsSocket {...state} />

      <ChatWindow
        {...state}
        renderChatFeed={() => <div>yo</div>}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default App;
