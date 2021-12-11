import React from 'react';

import {
  ChatEngine,
  Socket,
  useChatEngine,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const App: React.FC = () => {
  const {
    // Data
    chats,
    activeChatId,
    peopleToInvite,
    messages,
    // State
    hasMoreChats,
    // Simple Events
    onNewChat,
    onEditChat,
    onDeleteChat,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    // Large Events
    onConnect,
    onChatFormSubmit,
    onChatCardClick,
    onChatLoaderVisible,
    onMessageSend,
    onInvitePersonClick,
    onRemovePersonClick,
    onDeleteChatClick,
  } = useChatEngine(projectId, myUsername, mySecret);

  return (
    <div>
      <Socket
        projectId={projectId}
        myUsername={myUsername}
        mySecret={mySecret}
        onConnect={onConnect}
        // Hooks
        onNewChat={onNewChat}
        onEditChat={onEditChat}
        onDeleteChat={onDeleteChat}
        onNewMessage={onNewMessage}
        onEditMessage={onEditMessage}
        onDeleteMessage={onDeleteMessage}
      />

      <ChatEngine
        chats={chats}
        activeChatKey={activeChatId}
        messages={messages}
        myUsername={myUsername}
        peopleToInvite={peopleToInvite}
        // State
        hasMoreChats={hasMoreChats}
        // Hooks
        onChatFormSubmit={onChatFormSubmit}
        onChatCardClick={onChatCardClick}
        onChatLoaderVisible={onChatLoaderVisible}
        onMessageSend={onMessageSend}
        onInvitePersonClick={onInvitePersonClick}
        onRemovePersonClick={onRemovePersonClick}
        onDeleteChatClick={onDeleteChatClick}
        style={{ height: '90vh' }}
      />
    </div>
  );
};

export default App;
