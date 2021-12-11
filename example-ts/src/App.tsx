import React, { useState } from 'react';

import {
  ChatEngine,
  // Interfaces
  ChatProps,
  MessageProps,
  // Sockets
  Socket,
  // Actions
  deleteChat,
  getChatsBefore,
  newChat,
  newMessage,
  getChatsAndMessages,
  invitePerson,
  removePerson,
  // Utilities
  PersonProps,
  // Hooks
  useChatEngine,
  // Context
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const chatCountIterator = 20;
const messageCountIterator = 50;

const App: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[] | undefined>();
  const {
    // Data
    chats,
    activeChatId,
    peopleToInvite,
    // State
    chatCount,
    hasMoreChats,
    // Events
    onGetChats,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onChatCardClick,
    onGetMessages,
    onNewMessage,
  } = useChatEngine();

  const onConnect = () => {
    getChatsAndMessages(
      projectId,
      myUsername,
      mySecret,
      undefined,
      chatCount,
      messageCountIterator,
      onGetChats,
      onChatCardClick,
      onGetMessages
    );
  };

  const onMessageSend = (message: MessageProps) => {
    const newMessages = messages?.concat(message);
    setMessages(newMessages);

    newMessage(
      projectId,
      myUsername,
      mySecret,
      activeChatId,
      message,
      () => {}
    );
  };

  const onChatFormSubmit = (title: string) => {
    newChat(projectId, myUsername, mySecret, title, (chat) => {
      onNewChat(chat);
      onChatCardClick(chat.id);
    });
  };

  const onChatLoaderVisible = () => {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);
    const newChatCount = chatCount + chatCountIterator;

    getChatsBefore(
      projectId,
      myUsername,
      mySecret,
      now,
      newChatCount,
      onGetChats
    );
  };

  const onDeleteChatClick = (chat: ChatProps) => {
    deleteChat(projectId, myUsername, mySecret, chat.id, onDeleteChat);
  };

  const onInvitePersonClick = (person: PersonProps) => {
    activeChatId &&
      invitePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatId,
        person.username,
        () => onChatCardClick(activeChatId)
      );
  };

  const onRemovePersonClick = (person: PersonProps) => {
    activeChatId &&
      removePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatId,
        person.username,
        () => onChatCardClick(activeChatId)
      );
  };

  return (
    <div>
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
        style={{ height: '80vh' }}
      />

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
        onEditMessage={() => {}}
        onDeleteMessage={() => {}}
      />
    </div>
  );
};

export default App;
