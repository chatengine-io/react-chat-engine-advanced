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
  getMessages,
  getChatsAndMessages,
  getPeopleToInvite,
  invitePerson,
  removePerson,
  // Utilities
  getDateTime,
  PersonProps,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const chatCountIterator = 20;
const messageCountIterator = 50;

const App: React.FC = () => {
  // Data
  const [activeChatKey, setActiveChatKey] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatProps[] | undefined>();
  const [messages, setMessages] = useState<MessageProps[] | undefined>();
  const [peopleToInvite, setPeopleToInvite] = useState<
    PersonProps[] | undefined
  >();
  // State
  const [chatCount, setChatCount] = useState<number>(chatCountIterator);
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);

  const sortChats = (chats: ChatProps[]) => {
    return chats.sort((a: ChatProps, b: ChatProps) => {
      const aDate =
        a.last_message && a.last_message.created
          ? getDateTime(a.last_message.created, 0)
          : getDateTime(a.created, 0);
      const bDate =
        b.last_message && b.last_message.created
          ? getDateTime(b.last_message.created, 0)
          : getDateTime(b.created, 0);
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
  };

  const sortMessages = (messages: MessageProps[]) => {
    return messages.sort((a: MessageProps, b: MessageProps) => {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    });
  };

  const onGetChats = (chats: ChatProps[] = []) => {
    const sortedChats = sortChats(chats);
    setChats(sortedChats);
    setHasMoreChats(Object.keys(chats).length === chatCount);
    setChatCount(Object.keys(chats).length);
  };

  const onGetMessages = (chatId: number, messages: MessageProps[]) => {
    void chatId;
    setMessages(messages);
  };

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
      activeChatKey,
      message,
      () => {}
    );
  };

  const onChatCardClick = (chatId: number) => {
    setActiveChatKey(chatId);
    getMessages(
      projectId,
      myUsername,
      mySecret,
      chatId,
      messageCountIterator,
      onGetMessages
    );
    getPeopleToInvite(
      projectId,
      myUsername,
      mySecret,
      chatId,
      setPeopleToInvite
    );
  };

  const onNewChat = (chat: ChatProps) => {
    const newChats = [chat].concat(chats ? chats : []);
    setChats(newChats);
    setChatCount(newChats.length);
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

  const onDeleteChat = (oldChat: ChatProps) => {
    const newChats = chats
      ? chats.filter((chat) => chat.id !== oldChat.id)
      : [];
    setChats(newChats);
    setChatCount(newChats.length);
    if (newChats.length > 0 && activeChatKey === oldChat.id)
      onChatCardClick(newChats[0].id);
  };

  const onDeleteChatClick = (chat: ChatProps) => {
    deleteChat(projectId, myUsername, mySecret, chat.id, onDeleteChat);
  };

  const onInvitePersonClick = (person: PersonProps) => {
    activeChatKey &&
      invitePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatKey,
        person.username,
        () => onChatCardClick(activeChatKey)
      );
  };

  const onRemovePersonClick = (person: PersonProps) => {
    activeChatKey &&
      removePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatKey,
        person.username,
        () => onChatCardClick(activeChatKey)
      );
  };

  const onEditChat = (newChat: ChatProps) => {
    const otherChats = chats
      ? chats.filter((chat) => chat.id !== newChat.id)
      : [];
    const newChats = [newChat].concat(otherChats);
    const sortedChats = sortChats(newChats);
    setChats(sortedChats);
  };

  const onNewMessage = (chatId: number, newMessage: MessageProps) => {
    if (activeChatKey === chatId) {
      const otherMessages = messages
        ? messages.filter((message) => message.created !== newMessage.created)
        : [];
      const newMessages = otherMessages.concat(newMessage);
      const sortedMessages = sortMessages(newMessages);
      setMessages(sortedMessages);
    }
  };

  return (
    <div>
      <ChatEngine
        chats={chats}
        activeChatKey={activeChatKey}
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
      />
    </div>
  );
};

export default App;
