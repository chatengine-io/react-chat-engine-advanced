import React from 'react';

import { UserSocket, ChatEngineWindow, useChatEngine } from 'react-chat-engine';

// import './App.css';

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack'];
const userName = userNames[Math.floor(Math.random() * userNames.length)];
const projectId = '52147d0e-0f43-4ea7-916f-1820a16bf1d7';
const userSecret = 'pass1234';

const App = () => {
  const state = useChatEngine(projectId, userName, userSecret);

  return (
    <div>
      <UserSocket
        projectId={projectId}
        myUsername={userName}
        mySecret={userSecret}
        // Socket Hooks
        onConnect={state.onConnect}
        onAuthFail={state.onAuthFail}
        onNewChat={state.onNewChat}
        onEditChat={state.onEditChat}
        onDeleteChat={state.onDeleteChat}
        onNewMessage={state.onNewMessage}
        onEditMessage={state.onEditMessage}
        onDeleteMessage={state.onDeleteMessage}
        onIsTyping={state.onIsTyping}
      />

      <ChatEngineWindow
        // Chat Data
        myUsername={state.myUsername}
        chats={state.chats}
        activeChatId={state.activeChatId}
        messages={state.messages}
        // Event Hooks
        onChatFormSubmit={state.onChatFormSubmit}
        onChatCardClick={state.onChatCardClick}
        onChatLoaderShow={state.onChatLoaderShow}
        onMessageLoaderShow={state.onMessageLoaderShow}
        onMessageLoaderHide={state.onMessageLoaderHide}
        onBottomMessageShow={state.onBottomMessageShow}
        onBottomMessageHide={state.onBottomMessageHide}
        onMessageFormSubmit={state.onMessageFormSubmit}
        onInvitePersonClick={state.onInvitePersonClick}
        onRemovePersonClick={state.onRemovePersonClick}
        onDeleteChatClick={state.onDeleteChatClick}
        // Render Functions
        renderChatFeed={() => <div>yo</div>}
        // Style
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default App;
