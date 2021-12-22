import React from 'react';

import { Socket, ChatEngineWindow, useChatEngine } from 'react-chat-engine';

// import './App.css';

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack'];
const userName = userNames[Math.floor(Math.random() * userNames.length)];
const projectId = '52147d0e-0f43-4ea7-916f-1820a16bf1d7';
const userSecret = 'pass1234';

const App = () => {
  const state = useChatEngine(projectId, userName, userSecret);

  return (
    <div>
      <Socket
        projectId={projectId}
        myUsername={userName}
        mySecret={userSecret}
        {...state}
      />

      <ChatEngineWindow
        style={{ height: '100vh' }}
        myUsername={userName}
        {...state}
        renderChatFeed={() => <div>yo</div>}
      />
    </div>
  );
};

export default App;
